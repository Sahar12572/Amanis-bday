// ===============================
// HAPPY BIRTHDAY AMANI
// SCRIPT.JS
// ===============================


// -------------------------------
// ELEMENTS
// -------------------------------

const beginButton = document.getElementById("begin");

const intro = document.getElementById("intro");

const music = document.getElementById("birthdaySong");

const playPause = document.getElementById("playPause");

const playIcon = playPause.querySelector("i");

const slides = document.querySelectorAll(".slide");

const fadeElements = document.querySelectorAll(".fade-in");


// -------------------------------
// START WEBSITE
// -------------------------------

const lines = document.querySelectorAll(".intro-line");

setTimeout(()=>{

    lines[0].style.opacity="1";

},1500);

setTimeout(()=>{

    lines[1].style.opacity="1";

},3200);

beginButton.addEventListener("click",()=>{

    music.play();

    intro.style.transition="2s";

    intro.style.opacity="0";

    setTimeout(()=>{

        intro.remove();

    },2000);

});

// -------------------------------
// MUSIC BUTTON
// -------------------------------

playPause.addEventListener("click", () => {

    if(music.paused){

        music.play();

        playIcon.classList.remove("fa-play");

        playIcon.classList.add("fa-pause");

    }

    else{

        music.pause();

        playIcon.classList.remove("fa-pause");

        playIcon.classList.add("fa-play");

    }

});


// -------------------------------
// AUTO SLIDESHOW
// -------------------------------

let currentSlide = 0;

function changeSlide(){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide, 5500);


// -------------------------------
// SCROLL ANIMATION
// -------------------------------

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

fadeElements.forEach(element => {

    observer.observe(element);

});
// ===============================
// ===============================
// CREATE STARS
// ===============================

const starsContainer = document.getElementById("stars");

const starColours = [

    "#FFFFFF", // White

    "#7EC8FF", // Light Blue

    "#4DA6FF", // Bright Blue

    "#FF8BD5", // Pink

    "#FFB7E8", // Light Pink

    "#C084FC", // Purple

    "#7DF9FF"  // Cyan

];

for(let i = 0; i < 180; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
        (Math.random() * 4 + 2) + "s";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    star.style.opacity = Math.random();

    const colour = starColours[Math.floor(Math.random() * starColours.length)];

    star.style.background = colour;

    star.style.boxShadow = `0 0 8px ${colour}, 0 0 15px ${colour}`;

    starsContainer.appendChild(star);

}



// ===============================
// FLOATING LIGHTS
// ===============================

for(let i = 0; i < 25; i++){

    const light = document.createElement("div");

    light.classList.add("light");

    light.style.left = Math.random() * 100 + "%";

    light.style.animationDuration =
        (12 + Math.random() * 8) + "s";

    light.style.animationDelay =
        Math.random() * 10 + "s";

    starsContainer.appendChild(light);

}



// ===============================
// KEN BURNS EFFECT
// ===============================

slides.forEach(slide=>{

    const image = slide.querySelector("img");

    if(image){

        image.animate(

            [

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.08)"

                }

            ],

            {

                duration:8000,

                iterations:Infinity,

                direction:"alternate",

                easing:"ease-in-out"

            }

        );

    }

});



// ===============================
// FADE BETWEEN SLIDES
// ===============================

slides.forEach(slide=>{

    slide.style.transition="opacity 1.5s ease";

});



// ===============================
// TYPEWRITER RESTART
// ===============================

const typewriter = document.querySelector(".typewriter");

if(typewriter){

    window.addEventListener("load",()=>{

        typewriter.style.animation="none";

        void typewriter.offsetWidth;

        typewriter.style.animation="typing 5s steps(40,end), blink .9s infinite";

    });

}



// ===============================
// PAUSE MUSIC IF TAB CHANGES
// ===============================

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        music.pause();

        playIcon.classList.remove("fa-pause");

        playIcon.classList.add("fa-play");

    }

});



// ===============================
// IMAGE PRELOADER
// ===============================

document.querySelectorAll("img").forEach(image=>{

    const preload = new Image();

    preload.src = image.src;

});



// ===============================
// VIDEO FADE-IN
// ===============================

const videos = document.querySelectorAll("video");

videos.forEach(video=>{

    video.addEventListener("play",()=>{

        video.style.opacity="1";

        video.style.transition=".8s";

    });

});
// ===============================
// ONE LAST SURPRISE
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const memoryWall = document.getElementById("memoryWall");
const memoryGrid = document.getElementById("memoryGrid");
const finalScreen = document.getElementById("finalScreen");
const letterSection = document.querySelector(".letter-section");

const memoryImages = [

    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg"

];

// Shuffle the memories
memoryImages.sort(() => Math.random() - 0.5);

surpriseBtn.addEventListener("click", () => {

    // Hide the letter
    letterSection.style.display = "none";

    // Show the memory wall
    memoryWall.classList.remove("hidden");

    let index = 0;

    const wall = setInterval(() => {

        if(index >= memoryImages.length){

            clearInterval(wall);

            setTimeout(() => {

                memoryWall.style.display = "none";

                finalScreen.classList.remove("hidden");

            },2500);

            return;

        }

        const card = document.createElement("div");

        card.classList.add("memory");

        card.innerHTML = `
            <img src="${memoryImages[index]}" alt="Memory">
        `;

        memoryGrid.appendChild(card);

        setTimeout(() => {

            card.classList.add("show");

        },100);

        index++;

    },500);

});


// ===============================
// END OF SCRIPT
// ===============================

console.log("🎉 Happy Birthday Amani!");