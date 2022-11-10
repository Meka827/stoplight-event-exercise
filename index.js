//Shameka and Sang

//CONST
const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');

const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight');
const goLight = document.getElementById('goLight');

//function==========================


//eventListeners

//Add DOM event listeners and handlers to toggle the on/off state of three bulbs.
// stopButton.addEventListener('click', function(){
//   stopLight.classList.toggle('stop')
// });
slowButton.addEventListener('click', function(){
  slowLight.classList.toggle('slow')
});
goButton.addEventListener('click', function(){
  goLight.classList.toggle('go')
});



// //When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
stopButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${stopButton.textContent} button`)
});
slowButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${slowButton.textContent} button`)
});
goButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${goButton.textContent} button`)
});
//When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.
stopButton.addEventListener('mouseleave', function(){
  console.log(`Left ${stopButton.textContent} button`)
});
slowButton.addEventListener('mouseleave', function(){
  console.log(`Left ${slowButton.textContent} button`)
});
goButton.addEventListener('mouseleave', function(){
  console.log(`Left ${goButton.textContent} button`)
});



//When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
stopButton.addEventListener('click', function(){
    if(stopLight.classList.toggle('stop')) {
    console.log(`${stopButton.textContent} bulb on`)
    } else {
        console.log(`${stopButton.textContent} bulb off`)
    }
});
    
  slowButton.addEventListener('click', function(){
    if(slowLight.classList.toggle('stop')) {
        console.log(`${slowButton.textContent} bulb on`)
        } else {
            console.log(`${slowButton.textContent} bulb off`)
        }
  });
  goButton.addEventListener('click', function(){
    if(goLight.classList.toggle('stop')) {
        console.log(`${goButton.textContent} bulb on`)
        } else {
            console.log(`${goButton.textContent} bulb off`)
        }
  });

//When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.