window.addEventListener('scroll', function() {
  const backToTopButton = document.querySelector('.back-to-top')
  if(window.scrollY >= 500) {
    console.log('It works!')
    backToTopButton.classList.add('show')

  } else if(window.scrollY >= 600) {
    backToTopButton.style.bottom = "80px"

  } 
  
  else {
    backToTopButton.classList.remove('show')

  }
})

window.addEventListener('scroll', function() {
  const header = document.querySelector('#header')
  if(window.scrollY >= 150) {
    console.log('It works!')
    header.classList.add('shadow')

  } else {
    header.classList.remove('shadow')

  }
})

// Desenvolvido por Gabriel A.
