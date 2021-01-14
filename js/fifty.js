// here we make a function called makeMarque
function makeMarquee(){

const title='FIFTY Music Festival — November 10—12, Desert Valley'
// an array is a list of things
// example-->['lawrence',''rick','christian','1',false,true]
// here we make a new empty array with 50 spaces in it 
// then we fill it with the text from our title (50 times) 
// we then join then all together as one text string using a '-'
const marqueeText = new Array(50).fill(title).join(' — ')

// 1. we want to grab our .marquee span fron html
// 2. we want to set our repeating title as the content 

//querySelector and querySelectorAll are the same $ in JQuery
const marquee=document.querySelector('.marquee span')
// using innerHTML lets us set the content inside an element
marquee.innerHTML= marqueeText

}

// here we actually run our makeMarque function
makeMarquee()

function random(min, max) {
  return Math.floor(Math.random () * (max - min + 1)) + min;
}

// here we grab all our the .circles from the html 
const circles = document.querySelectorAll('.circle')
// circles returns an array so we need to loop through it
// inside of the forEach we get access to each individual element
// along with the its index
circles.forEach((circle, index) => {
// in here we get acess to each one as 'circle' 
circle.animate([
    // keyframes
    { transform: 'scale(1)' },
    { transform: 'scale(1.2)' },
    { transform: 'scale(1)' }

  ], {
    // here we use the index to create a staggered animation delay
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
  })
})

// animation squiggles
const squiggles=document.querySelectorAll('.squiggle')

squiggles.forEach((squiggle, index)=>{
  // gets a random number between 0 and 45 using our random function
  // from stackoverflow
  const randomNumber=random(0,45)
  // create a bit of randomness for our animation delay
  console.log(randomNumber)

  squiggle.animate([
    // keyframes
    { transform: 'rotate(0deg)' },
    // here we join or random number into our rotate property
    // { transform: 'rotate('+ randomNumber + 'deg)' },
    { transform: `rotate(${randomNumber}deg)`},
    { transform: 'rotate(0deg)' }

  ], {
    // here we use the index to create a staggered animation delay
    delay: 300 * index,
    duration: 5000,
    iterations: Infinity
  }
  
  )

})

// animation section
// here we want to detect when our .section eneters the viewport
// when it does, we want to add a class of 'in-viewport', and 
// when it exites we want to remove it again 
inView('.section')
	.on('enter', section => {
      // classList.add is the same as Jquery's .addClass() 
      // method but the vanilla javascript version
      section.classList.add('in-viewport')
      })
	.on('exit', section => {
  			section.classList.remove('in-viewport')
})

// here we set the class to add only once we have scrolled 0.2 of 
// our section into the viewport
inView.threshold(0.2)

