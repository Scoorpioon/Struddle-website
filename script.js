window.addEventListener('scroll', function() {
  const backToTopButton = document.querySelector('.back-to-top')
  if(window.scrollY >= 500) {
    console.log('It works!')
    backToTopButton.classList.add('show')

  } else {
    backToTopButton.classList.remove('show')

  }
})

const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 650,
  reset: true


})

scrollreveal.reveal('#home', {interval: 300})

// Desenvolvido por Gabriel A.