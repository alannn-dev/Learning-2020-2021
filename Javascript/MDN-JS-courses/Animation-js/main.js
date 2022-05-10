// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');            // CONTEXT : Comme le papier où l'animation est faite

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// CONSTRUCTEUR Ball
  function Ball(x, y, velX, velY, color, size) {
    this.x = x;             //  coordonnées horizontale (Point au centre de la balle)
    this.y = y;             //  coordonnées verticale (Point au centre de la balle)
    this.velX = velX;       // vitesse horizontale  
    this.velY = velY;       // vitesse verticale
    this.color = color;
    this.size = size;       // Taille : Rayon mesuré en pixels
  }


  // DESSIN DE LA BALLE 

  Ball.prototype.draw = function() {        // Methode .draw() pour dessiner sur le prototype de Ball
    ctx.beginPath();                    // beginpath() : Pour spécifier que nous voulons dessiner une forme sur le papier.
    ctx.fillStyle = this.color;         // fillStyle : Spécifie la couleur ou style à utiliser dans formes
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);     // 2 * Math.PI = 360°
    ctx.fill();     // Habituellement utilisée pour spécifier que nous souhaitons mettre fin au dessin
  }

  let testBall = new Ball(50, 100, 4, 4, 'blue', 10);

    testBall.x
    testBall.size
    testBall.color
    testBall.draw()


// Fonction de mise à jour pour mouvement balle
    Ball.prototype.update = function() {

        if ((this.x + this.size) >= width) {  // Si la balle a atteint le rebord du canvas
          this.velX = -(this.velX);             // Si oui, nous inversons la polarité de la vitesse pour faire bouger la balle dans le sens opposé
        }                                       // On verifie si la balle est en train de sortir du côté droit
      
        if ((this.x - this.size) <= 0) {    // On verifie si la balle est en train de sortir du côté gauche (Si x = -0)
          this.velX = -(this.velX);
        }
      
        if ((this.y + this.size) >= height) {  // On verifie si la balle est en train de sortir par le bas du canvas
          this.velY = -(this.velY);
        }
      
        if ((this.y - this.size) <= 0) {    // On verifie si la balle est en train de sortir par le haut du canvas (Si y < 0)
          this.velY = -(this.velY);
        }
      
        this.x += this.velX;
        this.y += this.velY;

        // Colission ball
        Ball.prototype.collisionDetect = function() {
            for (let j = 0; j < balls.length; j++) {
              if (!(this === balls[j])) {
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
          
                if (distance < this.size + balls[j].size) {
                  balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
                }
              }
            }
          }
      }

      let balls = [];

      while (balls.length < 25) {
        let size = random(10,20);
        let ball = new Ball(
          // ball position always drawn at least one ball width
          // away from the edge of the canvas, to avoid drawing errors
          random(0 + size,width - size),
          random(0 + size,height - size),
          random(-7,7),
          random(-7,7),
          'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
          size
        );
      
        balls.push(ball);
      }

      function loop() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(0, 0, width, height);
      
        for (let i = 0; i < balls.length; i++) {
          balls[i].draw();
          balls[i].update();
          balls[i].collisionDetect();  // Colision detection (Appel de la méthode)
        }
      
        requestAnimationFrame(loop);
      }

      loop();

      