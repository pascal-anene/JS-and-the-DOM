// const nanodegreeCard = document.querySelector('.card');

const mainHeading = document.querySelector('h1');
const otherHeading = document.querySelector('h4');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);


// Creating a New Community Content

const communitySection = document.querySelector('.testimonials');

const adviceHeading = document.createElement('h2');

adviceHeading.innerHTML = "<strong><em>Advice For New Udacity Students</em><strong>";

communitySection.appendChild(adviceHeading);

const adviceSentence = document.createElement('p');
adviceSentence.textContent = "Do Not Give Up! Just Keep Goind!!";

adviceHeading.insertAdjacentElement("afterend",adviceSentence);

// Three Ways to Remove an Element

/**
 * 
 * 
 * 
 * 
 */


