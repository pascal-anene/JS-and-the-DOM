// const nanodegreeCard = document.querySelector('.card');

// const mainHeading = document.querySelector('h1');
// const otherHeading = document.querySelector('h4');
// const excitedText = document.createElement('span');

// excitedText.textContent = '!!!';
// mainHeading.appendChild(excitedText);
// otherHeading.appendChild(excitedText);

// // Creating a New Community Content

// const communitySection = document.querySelector('.testimonials');

// const adviceHeading = document.createElement('h2');

// adviceHeading.innerHTML = "<strong><em>Advice For New Udacity Students</em><strong>";

// communitySection.appendChild(adviceHeading);

// const adviceSentence = document.createElement('p');
// adviceSentence.textContent = "Do Not Give Up! Just Keep Goind!!";

// adviceHeading.insertAdjacentElement("afterend",adviceSentence);

/**
 *
 *
 *
 *
 */

// Change Styling of Buttons using buttons

// const buttonElement = document.querySelector('#start-now');
// buttonElement.style.cssText = 'background:#2015ff ; border-radius:5rem ';

// //Change Styling of Page background

// const heroSection = document.querySelector('.hero--homepage');
// heroSection.classList.add('new-hero');

// // Change Styling of Card Sections

// const cardElements = document.getElementsByClassName('card');

// for(let i = 0; i < cardElements.length; i++){

//     cardElements[i].classList.add('new-card');

// }

// Alternative way of Styling Card
// We could have used querySelectorAll() method which returns a NodesList

// const cardElements = document.querySelectorAll();
// then use the normal for loop to add the new-card class using classList.add()

/**
 * Lesson 3 Practice Sessions: Events
 */

// document.addEventListener('click', function(){

//     const heading = document.querySelector('h1');

//     heading.style.backgroundColor = 'red';

//     console.log("LogMessage","This Page was clicked and color changed");

// })

/**
 * Testing Quize Code
 */

// document.addEventListener('keypress', function(){

//     document.body.remove();
// })

/**
 * More Practice on Udacity
 * Practicing Mouse Events
 * This can be done in two (or actually maybe more, hehe) ways
 * First Option
 */

// const heading = document.querySelector('h1');

// heading.addEventListener('mouseenter', function(){
//     heading.textContent = "Build an AR App";
// })

// heading.addEventListener('mouseleave', function(){
//     heading.textContent = "Learn ARKit";
// })

/**
 * More Practice on Udacity
 * Practicing Mouse Events
 * Second Option
 */

// // Select the h1 element
// const heading = document.querySelector('h1');

// //Retrieve the Original Text and store in a variable
// const originalText = heading.textContent;

// //Declare and store the new text
// const updatedText = "Build an AR App";

// //Add an event listener with event type to the event target (h1)
// heading.addEventListener('mouseover', function(){
//     heading.textContent = updatedText;
// })

// heading.addEventListener('mouseout', function(){
//     heading.textContent = originalText;
// })

/**
 * Practicing Finding Event Listeners with Dev Tools
 */

// document.addEventListener('keypress', function(){
//     console.log("removing first child")
//     document.querySelector('#contain-all').firstElementChild.remove();
// })

/**
 * Practice: Removing one of the featured modules
 */

//select hero module element
// const featuredProgramSection = document.querySelector(".hero__module");

// //define function to remove element
// function removeElementOnce() {
//   featuredProgramSection.lastElementChild.remove();
//   document.removeEventListener("keypress", removeElementOnce);
// }

// // add an event listener to the document
// document.addEventListener("keypress", removeElementOnce);

// to respond to the event just once we add removeEventListener() to the function above

/**
 * Practicing Event Phases and event object manipulation
 *
 */

// Select the Classroom Button Element (this did not work for some reason)
//  const link = document.querySelector('#ga-99cff7');

//  // const link = document.querySelector('#my-classroom');

//  // Attach a listener to the button link with event referenced

//  link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("Oops You stayed on the current page");
// });

/**
 * Practicing Multiple Listeners with Loops
 */

// Create a div element
const myCustomDiv = document.createElement("div");

// Use a for loop to create 200 paragrpah elements with text content 
for (let i = 1; i <= 200; i++) {
  const paragraph = document.createElement("p");

  paragraph.textContent = "This is paragraph: " + i;

  // Add event listener to each paragraph created
  paragraph.addEventListener('click',function respondToTheClick(){
      console.log("This paragraph was clicked");
  })

  // Append each paragraph as the last child of the div element
  myCustomDiv.appendChild(paragraph);
}

document.body.appendChild(myCustomDiv);

/**
 * First Step to Refactoring the Code above
 */
