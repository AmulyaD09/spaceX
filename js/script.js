const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

// let prevScrollPos = document.documentElement.scrollTop;
var prevScrollpos = document.documentElement.scrollTop;
var navbar = document.getElementById("navbar");
var navbarHeight = navbar.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = document.documentElement.scrollTop;
  
  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
  } else {
    // Scrolling down
    navbar.style.transform = "translateY(-" + navbarHeight + "px)";
  }
  
  prevScrollpos = currentScrollPos;
}

let rocketPieces = document.querySelectorAll('.rocket-body span')

let rocket = document.querySelector('.rocket')

let triggerStart = window.innerHeight/5;

let rocketOffsetTop = rocket.offsetTop;

let thirdOffsetTop = rocketPieces[2].offsetTop;

document.addEventListener('scroll', (e) => {
  if(window.scrollY > (rocketOffsetTop - triggerStart)) {
    rocketPieces[0].classList.add('active');
    rocketPieces[1].classList.add('active');
  } else {
    rocketPieces[0].classList.remove('active');
    rocketPieces[1].classList.remove('active');
  }

  if(window.scrollY > (thirdOffsetTop - triggerStart)) {
    rocketPieces[2].classList.add('active');
  } else {
    rocketPieces[2].classList.remove('active');
  }
})

