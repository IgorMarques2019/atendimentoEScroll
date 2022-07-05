const sections = document.querySelectorAll('.js-scroll')



function animaScroll() {
  if (sections.length) {
    const metadeJanela = window.innerHeight * 0.80

    function animaScrollDetect() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top
        const isVisible = (sectionTop - metadeJanela) < 0

        if (isVisible) {
          item.classList.add("ativo")
        } else {
          item.classList.remove("ativo")
        }
      })
    }
    animaScrollDetect()
    window.addEventListener('scroll', animaScrollDetect)

  }
 

}
animaScroll()



// header detecta se está aberto ou não

function OpenComerce(){
  const headerSpan = document.querySelector('header span')
  const dateSpan = new Date ();
  const horarioComercial = dateSpan.getHours() >= 09 && dateSpan.getHours() <= 17;
  if(horarioComercial){
    headerSpan.classList.add('open')
    headerSpan.innerHTML = "abertos"
  }else {
    headerSpan.classList.remove('open')
  }
  
}

OpenComerce()
