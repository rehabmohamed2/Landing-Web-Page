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
const sectionsList = document.getElementsByTagName('section');
const fragment = document.createDocumentFragment();
/**
 * End Global Variables

 * Begin Main Functions
 *
*/

// build the nav
for (const section of sectionsList){
  const navItemName = section.dataset.nav;
  const li = document.createElement('li');
  li.insertAdjacentHTML('afterbegin',`<a href = '#${section.id}' class='menu__link navbar__menu'>${navItemName}</a>`);
  fragment.appendChild(li);


// Begin Events

// Scroll to anchor ID when it is clicked

  li.addEventListener('click',function (evt){
    evt.preventDefault();
    // Scroll to section on link click

    section.scrollIntoView({behavior: "smooth",block:'start',inline:'nearest'});
  });



  const anchor = li.querySelector('a');

  window.addEventListener('scroll',function(){
    const top = section.getBoundingClientRect()['top'];
    if(top>-200 && top < 400){
      for(sec of sectionsList){
        sec.classList.remove('your-active-class');
      };
      // Add class 'your-active-class' to section when near top of viewport
      section.classList.add('your-active-class');
      // Add class 'active' to anchor element when its section is near the top of viewport
      anchor.classList.add('active');
    }
    else{
      section.classList.remove('your-active-class');
      anchor.classList.remove('active');
    }
  });
}
document.querySelector('#navbar__list').appendChild(fragment);

/*
 * End Main Functions
*/
