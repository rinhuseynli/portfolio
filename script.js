gsap.to(".hello", {
  text:"Hello again! I am Nazrin Huseynli",
  duration: 2.3,
  ease: "power1.in",
})

gsap.to(".info", {
  text:"A Front-End Developer from Hamilton, ON.",
  duration: 2.3,
  delay: 1.5,
  ease: "power1.in",
})

gsap.to(".textOne", {
  text:"Since January 2022 I have been studying at Can She Code Inc. School. I am building websites using HTML, CSS, JavaScript with other frameworks and libraries. Currently I'm getting to know the React( +Redux and Node.js). Other than coding, I spend most of my free time playing Genshin Impact or any other video games, reading books and manga/manhwa. 😊  I've also been trying to read more on English so feel free to reach out to me with any book recommendations!",
  duration: 20,
  delay: 2.5,
  ease: "power1.in",
})




const textArray = [
  "I'm Front-End Web Developer",
  "Freelancer",
  "Creating A Landing Page",
  "Desing For Devices"
]

const getAnimFromIndex = (index) => (
{
  duration: 1.5,
  repeat: 1,
  repeatDelay: 2,
  yoyo: true,
  text: {
  value: textArray[index],
  delimiter: ""
  },
  ease: "ease.in",
})

const getKeyFrames = () => {
  const keyframes = []
  for (let i = 0; i < textArray.length; i++) {
  keyframes.push(getAnimFromIndex(i))
  }
  return keyframes
}

const tl1 = gsap.timeline()

tl1.to(".span", {
  keyframes: getKeyFrames(),
  repeat: -1,
})

const tl2 = gsap.timeline()

tl2.to("h2", {
  keyframes: [
  { "--typeCursorOpacity": 1, duration: 1.5, delay: 0 },
  { "--typeCursorOpacity": 0, duration: 0, delay: 0.55 },
  { "--typeCursorOpacity": 1, duration: 0, delay: 0.55 },
  { "--typeCursorOpacity": 0, duration: 0, delay: 0.55 },
  { "--typeCursorOpacity": 1, duration: 0, delay: 0.55 },
  { "--typeCursorOpacity": 1, duration: 1.5, delay: 0 },
  ],
  repeat: -1,
})

// --- navbar ---

const nav_links = document.querySelectorAll(".nav-link");
const burger = document.querySelector(".burger");

window.onresize = () => {
  const active = document.querySelector(".active");
  underlineLink(active);
};

function underlineLink(elem) {
  const underline = document.getElementById("underline");
  underline.style.left = `${elem.offsetLeft}px`;
  underline.style.width = `${elem.offsetWidth}px`;
}

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", (e) => {
    nav_links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
    underlineLink(e.target);
  });
});

/* burger */
burger.addEventListener("click", () => {
  if (burger.classList.contains("fa-bars")) {
    burger.classList.replace("fa-bars", "fa-times");
  } else {
    burger.classList.replace("fa-times", "fa-bars");
  }
});

//to the top button 

let toTopButton = document.getElementById("toTopButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area":1000
        }
      },
      "color": {
        "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
      },
      
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
