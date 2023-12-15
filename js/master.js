// Check if there's local storage color option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null){
    // console.log("local storage is not empty you can set it on root now! ");
 
   // console.log(localStorage.setItem("colors-option" , e.target.dataset.color));

   document.documentElement.style.setProperty('--main-color' , mainColors);
// Remove active class from all colors liste item
document.querySelectorAll(".colors-list li").forEach(element =>{
    element.classList.remove("active");
    // add active class on element with data-color ===local storage item
    if (element.dataset.color === mainColors) {
        // add active class
        element.classList.add("active");
    }

});


}
// random background option
let backgroundOption = true;
// variable to controle the background interval
let backgroundInterval ;
// check if there's storage Random background item
let backgroundLocalItem = localStorage.getItem("background_option") ;
 
// Check if Random backgrounds  local storage is not empty
if (backgroundLocalItem === 'true'){
    if(backgroundLocalItem = 'true'){
        backgroundOption  = true ;
        
       
       } else {
           backgroundOption = false;
           
       }
       // Remove active class from all colors liste item
document.querySelectorAll(".random-backgrounds span ").forEach(element =>{
    element.classList.remove("active")});
 if(backgroundLocalItem === true){
    document.querySelectorAll(".random-backgrounds .yes").classList.add("active")
 }
 else {document.querySelectorAll(".random-backgrounds .no").classList.add("active");

 }
}






 // click on toggle settings box fa-gear
document.querySelector('.toggle-settings .fa-gear').onclick = function(){
    
    // Toggle Class fa-spin for rotation in self
    this.classList.toggle("fa-spin");

    // Toggle class open on main settings box
    document.querySelector('.settings-box').classList.toggle("open");
    
};

// Switch Colors
const colorli = document.querySelectorAll(".colors-list li")
// loop on all list items
colorli.forEach(li => {
   // Click On every list items
   li.addEventListener("click" , (e) =>{
    console.log(e.target.dataset.color);

    //set Color On Root
    document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);

    // set colors on local storage
    localStorage.setItem("colors_option", e.target.dataset.color)
   handleActive(e);
});
});
// Switch Random backgrounds option
const randomBackEL = document.querySelectorAll(".random-backgrounds span")
// loop on all pan
randomBackEL.forEach(span=> {
   // Click On every span
    span.addEventListener("click" , (e) =>{
    console.log(e.target.dataset.color);
     //set Color On Root

    // document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);

    // // set colors on local storage
    // localStorage.setItem("colors_option", e.target.dataset.color)
    handleActive(e);
    if(e.target.dataset.backgrounds === "yes") {
    backgroundOption = true;
    randomizeImgs();
    
    } else {
    backgroundOption = false;
    clearInterval(backgroundInterval);
    
    }
});
});
// handle bullets option
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");

let bulletsLocalItem = localStorage.getItem("bullets_option");
if(bulletsLocalItem !== null){
    bulletsSpan.forEach(span => {
        span.classList.remove("active")
    });

    if(bulletsLocalItem === 'block'){
        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");

    }else {
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }


}

bulletsSpan.forEach(span => {
    span.addEventListener("click" , (e) =>{
        if(span.dataset.display === 'show'){
            bulletsContainer.style.display= 'block';

            localStorage.setItem("bullets_option" ,'block' );
        }else {
            bulletsContainer.style.display= 'none';
            localStorage.setItem("bullets_option" ,'none' )
        }

        handleActive(e);
    });
});


// Select landing Page Element

let landingPage = document.querySelector(".landing-page");


// Get array Of imgs
let imgsArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];



// function to randmize background imgs

 function randomizeImgs () {
    if (backgroundOption === true ){
        backgroundInterval = setInterval (() =>{
        // Get random number of background imgs 
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
    // console.log(randomNumber)

    // change background imgs url 
    
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    
    } ,10000);

   
    
}}
randomizeImgs();


// select skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
    //Skills Offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    // this.console.log(skillsOffsetTop);

    // skills Outer height
let skillsOuterHeight = ourSkills.offsetHeight;

// this.console.log(skillsOuterHeight);

// window height

let windowHeight = this.innerHeight;

// Window scroll Top

let windowScrollTop = this.pageYOffset; 

 
if ( windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight )){
    
let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    });



}
};
// Create Popup  with Image 
let ourGallery = document.
querySelectorAll(".images-box img");

ourGallery.forEach(img => {
    img.addEventListener('click' , (e) =>{   
        // create overlay element  
        let overlay = document.createElement("div");
    
    
        // add class to overlay 
        overlay.className = 'popup-overlay';
    
    
        // Append Overlay to the body
        document.body.appendChild(overlay);
        // Create the popup 
        let popupBox = document.createElement("div");

        // add class to the popup box
        popupBox.className = 'popup-box';
        if (img.alt !== null)
        {
            //create Heading
            let imgHeading = document.createElement("h3");
    
            // create text for heading
            let imgText = document.createTextNode(img.alt);
    
            //Append the text to the heading
            imgHeading.appendChild(imgText);
    
            // Append the heading to the popup box
            popupBox.appendChild(imgHeading)
    
        }

        // Create the Image
        let popupImage = document.createElement("img");
        // Set Image source
        popupImage.src = img.src;

        // Add image to popup Box
        popupBox.appendChild(popupImage);

        // Append the popup box to body
        document.body.appendChild(popupBox);

        // create the close span 
        let closeButton = document.createElement("span");

        // create the text of my span

        let closeButtonText = document.createTextNode("X");

        // Append the text to the span element
        closeButton.appendChild(closeButtonText);

        // add class to close button
        closeButton.className = 'close-button';
        

        // add close button to the popup Box
        popupBox.appendChild(closeButton);

        closeButton.addEventListener('click' , function(e) {

            if(e.target.classList == "close-button"){
                //Remove the current popup
                e.target.parentNode.remove();

                // // Remove the overlay 
                document.querySelector(".popup-overlay").remove();
            }

        });

    });


});
// start bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks = document.querySelectorAll(".links a");

// select all links
function scrollToSomewhere (elements){
    elements.forEach(ele => {
        ele.addEventListener("click" , (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

};
scrollToSomewhere (allBullets);
scrollToSomewhere (allLinks);

// handle active state
function handleActive(ev){
     // Remove Active class from all childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
    element.classList.remove("active");
    }) ;
   // Add active class on self
    ev.target.classList.add("active");
}
document.querySelector(".reset-option").onclick = function(){
    // localStorage.clear()
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // reload window
    window.location.reload();
    
};


