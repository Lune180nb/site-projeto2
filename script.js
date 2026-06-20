
let btnHamburger = document.getElementById("btn-hamburguer")
let btnVoltar = document.getElementById("btn-voltar")
let navHamburguer = document.getElementById("nav-hamburger")
let overlay = document.getElementById("overlay")
let linkMenu = document.querySelectorAll(".nav-burger-menu a")
const elementos = document.querySelectorAll(".animar-esquerda, .animar-direita, .animar-baixo, .animar-cima")

function abrirNav(){
  navHamburguer.classList.toggle("ativo")
  btnVoltar.classList.toggle("ativo")
  btnHamburger.classList.toggle("fechado")
  overlay.classList.toggle("ativo")
  
  if(navHamburguer.classList.contains("ativo")){
    document.body.style.overflow = "hidden"
  }else{
    document.body.style.overflow = "auto"
  }
}

const observer = new IntersectionObserver((entires) => {
  entires.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("mostrar")
    }
  })
})

elementos.forEach(elemento => {
  observer.observe(elemento)
})

linkMenu.forEach(link => {
  link.addEventListener("click", abrirNav)
})

overlay.addEventListener("click", abrirNav)

btnVoltar.addEventListener("click", () => {
  abrirNav()
})

btnHamburger.addEventListener("click", () =>{
  abrirNav()
})





