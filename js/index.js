// Your code goes here
const logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseenter', (event) => {
   event.target.style.backgroundColor = 'teal'
   event.target.style.color = 'yellow'
})


const logoHeading2 = document.querySelector('.logo-heading')
logoHeading2.addEventListener('mouseleave', (event) => {
   event.target.style.backgroundColor = 'white'
   event.target.style.color = 'black'
})


const logoNav = document.querySelectorAll('.nav-link')
logoNav.forEach(link =>{
    link.addEventListener('mouseenter', (event) => {
   event.target.style.backgroundColor = 'teal'
   event.target.style.color = 'yellow'})
 
})


const logoNav2 = document.querySelectorAll('.nav-link')
logoNav2.forEach(link =>{
    link.addEventListener('mouseleave', (event) => {
   event.target.style.backgroundColor = 'white'
   event.target.style.color = 'black'})
})

const busImage = document.querySelector('.intro')
busImage.addEventListener('click', () => {
    busImage.style.transform = "scale(1.2)";
    busImage.style.transition = "all 0.3s";
  })
  const busImage2 = document.querySelector('.intro')
      busImage2.addEventListener('dblclick', () => {
      busImage.style.transform = "scale(.80)";
      busImage.style.transition = "all 0.3s";
  })

  const dragImg = document.querySelector('.img-content')
   dragImg.addEventListener('drag', (event) => {
      dragImg.style.transform = 'scale(1.2)'
      dragImg.style.transition = "all 0.3s";
  })

  const changeImg = document.querySelector('.img-content img')
   changeImg.addEventListener('dragend', (event) => {
     changeImg.src = "img/fun.jpg"
  })

  const selectText = document.querySelector('.text-content')
   selectText.style.background = 'black'
   selectText.style.color = 'white'

   const changeImg2 = document.querySelector('.img-content')
   changeImg2.addEventListener('mouseout', () => {
     changeImg2.style.transform = 'scale(1)'
  })

  
    const contImg = document.querySelectorAll('.img-content')
  const titleEventHandler = (event) => {
   event.target.src = "img/adventure.jpg"
 }

  contImg.forEach(title => {
   title.addEventListener('wheel', titleEventHandler)
 })

 const changeImg3 = document.querySelector('.content-destination img')
 changeImg3.addEventListener('keypress', (event) => {
   changeImg3.src = "img/fun.jpg"
})

window.addEventListener('resize', () => {
   const destImg = document.querySelector('.content-destination img')
   destImg.src = "img/fun.jpg"
 })