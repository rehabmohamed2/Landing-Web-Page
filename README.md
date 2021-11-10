# Project Name: Landing Page

# Author Name: Rehab Mohamed Ahmed Lotfy
# E-mail for support: rehabmohamed151220@gmail.com 

# Description:
This project aims to click on a navigation item should scroll to the appropriate section of the page.
to convert a static webpage into an interactive dynamic one, 
and we made that by using JavaScript and the DOM tools.

- first built the navigation bar by using .querySelectorAll() method to get all the section elements in the webpage 
which we out the names of sectiosn in the navigation bar, I used these methods and properties to do that:  
- .createElement()
- .appendChild()
- .innerHTML

- I used .addEventListener() and .getBoundingClientRect() to detect which section is 
in the viewport while scrolling and after detecting that the event listener will 
execute the function takes an action to clarify that section.

- Converting static webpage into a dynamic by making the 
navigation bar elements anchors that when one of them is clicked the page scrolls to 
the clicked section not only jumps into it and to do that we used an event listener to detect if one of the anchors 
is clicked then disable the proprety of anchors to jump into the desired place by using .preventDefault() method
then we made it scroll to the desired section when the corresponding anchor is clicked by using scrollIntoView method.

# How to run the project?
You will need to have following files in same directory:
- index.html
- styles.css   
- app.js

Click on the index.html file and open it with your browser.

