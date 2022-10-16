// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.

const oompa = document.getElementById('grayButton');
oompa.addEventListener('click', function(){
 document.body.classList.add('darkMode');   
});


// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

const whiteBtn = document.querySelector('whiteButton');
function getWhitebtn(){
    document.body.classList.remove('darkMode');
}
getWhitebtn.addEventListener('click',getWhitebtn);