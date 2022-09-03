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

// // Create a div element
// const myCustomDiv = document.createElement("div");

// // Use a for loop to create 200 paragrpah elements with text content
// for (let i = 1; i <= 200; i++) {
//   const paragraph = document.createElement("p");

//   paragraph.textContent = "This is paragraph: " + i;

//   // Add event listener to each paragraph created
//   paragraph.addEventListener('click',function respondToTheClick(){
//       console.log("This paragraph was clicked");
//   })

//   // Append each paragraph as the last child of the div element
//   myCustomDiv.appendChild(paragraph);
// }

// document.body.appendChild(myCustomDiv);

/**
 * First Step to Refactoring the Code above
 */

// Create a div element
// const myCustomDiv = document.createElement("div");

// function respondToTheClick(){
//     console.log("This paragraph was clicked ");
// }

// // Use a for loop to create 200 paragrpah elements with text content
// for (let i = 1; i <= 200; i++) {
//   const paragraph = document.createElement("p");

//   paragraph.textContent = "This is paragraph: " + i;

//   // Add event listener to each paragraph created
//   paragraph.addEventListener('click',respondToTheClick);

//   // Append each paragraph as the last child of the div element
//   myCustomDiv.appendChild(paragraph);
// }

// document.body.appendChild(myCustomDiv);

/**
 * Second Step to Refactoring the Code above
 * Attaching the Event Listener to the div element instead
 */

// // Create a div element
// const myCustomDiv = document.createElement("div");

// function respondToTheClick(){
//     console.log("This paragraph was clicked ");
// }

// // Use a for loop to create 200 paragrpah elements with text content
// for (let i = 1; i <= 200; i++) {
//   const paragraph = document.createElement("p");

//   // Add Content to the paragraph Element
//   paragraph.textContent = "This is paragraph: " + i;

//   // Append each paragraph as the last child of the div element
//   myCustomDiv.appendChild(paragraph);
// }

// myCustomDiv.addEventListener('click',respondToTheClick);

// document.body.appendChild(myCustomDiv);

/**
 * Third Step to Refactoring: Using Event Delegation
 * Since we want to be able to target specific paragraphs or elements within the div element
 */

// //Create a div element
// const myCustomDiv = document.createElement("div");

// //Define listener function for our event listener, this time with the event parameter
// function respondToTheClick(event) {
//   console.log("This paragraph was clicked " + event.target.textContent);
// }

// for (let i = 0; i <= 200; i++) {
//   const paragraph = document.createElement("p");

//   // Add content to the paragraph
//   paragraph.textContent = "This is paragraph: " + i;

//   //Append each paragraph as the last child to the div element
//   myCustomDiv.appendChild(paragraph);
// }

// myCustomDiv.addEventListener("click", respondToTheClick);

// document.body.appendChild(myCustomDiv);

/**
 * Another Example with Node Type Testing with unconnected code block
 */

// {/* <article id="content">

//   <p>
//     Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll
//     dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant
//     fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping
//     sugar plum jelly jujubes chocolate.
//   </p>

//   <p>
//     Tart bonbon soufflé gummi bears. Donut marshmallow
//     <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy
//     caramels tootsie roll powder sweet roll brownie <span>apple pie</span>
//     gummies. Fruitcake danish chocolate tootsie roll macaroon.
//   </p>

// </article>;

// // This will add an event listener to the <article> element
// document.querySelector('#content').addEventListener('click', function (evt) {

//     console.log('A span was clicked with text ' + evt.target.textContent);

// });

// //This will ensure that the click listener fires when a <span> element is clicked

// document.querySelector('#content').addEventListener('click', function(event){

//     if(event.target.nodeName === 'SPAN'){

//         console.log('A span was clicked with text ' + event.target.textContent);

//     }

// }) */}

/**
 * Adding Favourite Buttons
 * In this exercise, we will add buttons to the Nanodegree cards in the section of the page
 */

//First we target and select the card containers we want to add the buttons to
// I checked the html code and found the card conatainers with their classes
//Remember the querySelectorAll() method returns a NodeList

const cardList = document.querySelectorAll(".card__container");

//Variables to store the textContent for the Button Elements;
//In a production programming, these strings might be retrieved from a Database or remote server or from a file asset
//Think of what you've been doing with Databricks :)
const addFavouritesText = "Add to Favourites";
const removeFavouritesText = "Remove From Favourites";

//Define Listener Function
function toggleButtonContent(event) {
  const target = event.target;

  // Check if target is the Button
  if (target.nodeName === "BUTTON") {
    event.preventDefault();

    if (target.textContent.startsWith("Add")) {
      target.textContent = removeFavouritesText;

      //Create a paragraph element to hold the favicon
      const fav = document.createElement("p");
      fav.textContent = "⭐ ⭐ ⭐";

      // Append fav element to the title
      target.parentElement.appendChild(fav);
    } else {
      //Resets the button content to the original text
      target.textContent = addFavouritesText;

      //Remove the favourites status bar
      target.nextSibling.remove();
    }
  }
}

//We loop through each card using a for loop
//We could use another loop method from the document class like the forEach()
//However, that method is supported fully by all browsers
for (let i = 0; i < cardList.length; i++) {
  // First we create the Button Element
  let cardButton = document.createElement("button");

  // Then we add the Original TextContent to the element
  cardButton.textContent = addFavouritesText;

  //Then we add the Styling classes using CSS Translated for the DOM
  cardButton.classList.add("button", "button--primary");

  //Then we add the newly styled Button Element using the appendChild method to the selected class
  cardList[i].querySelector(".card--nanodegree__title").appendChild(cardButton);

  cardList[i].addEventListener("click", toggleButtonContent);
}
