/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
  //dynamically create a navigation menu based on the sections of the page. 
  //Keep in mind: where is the text from each navigation item coming from and where are you anchoring to? 
 	// How're you going to add each navigation item to your menu (there are several ways to do this)

	// function createLi(evt) {

	// }

const Frag = document.createDocumentFragment();

const list = document.createElement('li');
const section = document.querySelector('#section1');

const textSection = section.dataset.nav;
list.textContent = textSection.textContent;

Frag.appendChild(list);
document.body.header.appendChild(Frag);

// const myListFrag = document.createDocumentFragment(); 

// for (let i = 1; i <=3; i++) {
// 	var list = document.createElement('li');
// 	var sectionName = '#section' + 'i';
// 	var section = document.querySelector('sectionName');

// 	var textSection = section.dataset.nav;

// 	list.textContent = textSection; 
	
// 	myListFrag.appendChild(list);
// }

// document.ul.appendChild(myListFrag);

// document.addEventListener('DOMContentLoaded', function(){
// 	document.createElement('li');
	//place the navigation in the id navbar__list
// });


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active