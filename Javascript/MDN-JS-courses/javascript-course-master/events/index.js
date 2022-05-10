const btn = document.querySelector('#btn')
const img = document.getElementById('img')

btn.addEventListener('click', (e) => {
  img.classList.toggle("show")
})

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

  if (e.x > 600 ) {
    document.body.style.filter =  'blur(3px)';
  } else {
    document.body.style.filter = 'none';
  }
});

const input = document.getElementById('input');

input.addEventListener('input', (e) => {
  console.log(e.target.value);
  vertical.innerHTML = e.target.value
})


const theme = document.querySelectorAll('.theme')

theme.forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log('yes');
    document.body.classList.remove('darkTheme', 'yellowTheme', 'greenTheme')
    switch (e.target.id) {
    //switch (expression)
      case "dark":
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à dark
        document.body.classList.add("darkTheme");
        break;
      case "yellow":
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à yellow
        document.body.classList.add("yellowTheme");
        break;
      case "green":
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à green
        document.body.classList.add("greenTheme");
        break;
      default:
        null;
    }
  })
);

