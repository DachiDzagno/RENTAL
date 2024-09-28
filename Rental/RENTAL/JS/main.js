


// Select the menu button and navigation links elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i"); // Select the icon inside the menu button

// Event listener for the menu button click
menuBtn.addEventListener("click", (e) => {
  // Toggle the 'open' class on the navigation links
  navLinks.classList.toggle("open");

  // Check if the navigation links are open and update the icon accordingly
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Event listener for clicking on navigation links
navLinks.addEventListener("click", (e) => {
  // Close the navigation menu
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line"); // Reset the icon to menu
});

// ScrollReveal options for animations
const scrollRevealOption = {
  origin: "bottom", // Animation starts from the bottom
  distance: "50px", // Distance moved during the animation
  duration: 1000, // Duration of the animation in milliseconds
};

// Reveal animations for various elements
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500, // Delay for the form
});
ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
  delay: 1000, // Delay for the image
});

// Reveal animations for range cards
ScrollReveal().reveal(".range__card", {
  duration: 1000,
  interval: 500, // Interval between each card's reveal
});

// Reveal animations for location section
ScrollReveal().reveal(".location__image img", {
  ...scrollRevealOption,
  origin: "right", // Animation starts from the right
});
ScrollReveal().reveal(".location__content .section__header", {
  ...scrollRevealOption,
  delay: 500, // Delay for the section header
});
ScrollReveal().reveal(".location__content p", {
  ...scrollRevealOption,
  delay: 1000, // Delay for the paragraph
});
ScrollReveal().reveal(".location__content .location__btn", {
  ...scrollRevealOption,
  delay: 1500, // Delay for the button
});

// Select all car selection cards
const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info"); // Show information for the first card

// Prices for the car selection cards
const price = ["225", "455", "275", "625", "395"];
const priceEl = document.getElementById("select-price"); // Select the price element

// Function to update the swiper image and price based on the slide change
function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex; // Get the current slide index
    priceEl.innerText = price[index]; // Update price displayed
    selectCards.forEach((item) => {
      item.classList.remove("show__info"); // Remove info from all cards
    });
    selectCards[index].classList.add("show__info"); // Show info for the current card
  }
}

// Initialize the Swiper instance for car selection
const swiper = new Swiper(".swiper", {
  loop: true, // Enable looping of slides
  effect: "coverflow", // Set the transition effect
  grabCursor: true, // Change cursor style on hover
  centeredSlides: true, // Center the active slide
  slidesPerView: "auto", // Show multiple slides based on available width
  coverflowEffect: {
    rotate: 0, // No rotation for coverflow effect
    depth: 500, // Depth of the effect
    modifier: 1,
    scale: 0.75, // Scale for coverflow
    slideShadows: false, // Disable slide shadows
    stretch: -100, // Stretch slides in the effect
  },

  // Event listener for any Swiper event
  onAny(event, ...args) {
    updateSwiperImage(event, args); // Call the update function
  },
});

// Reveal animations for story cards
ScrollReveal().reveal(".story__card", {
  ...scrollRevealOption,
  interval: 500, // Interval between each card's reveal
});

// Banner duplication for accessibility
const banner = document.querySelector(".banner__wrapper");
const bannerContent = Array.from(banner.children); // Convert banner children to an array

// Clone each banner item and set aria-hidden attribute for accessibility
bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true); // Hide duplicate nodes
  banner.appendChild(duplicateNode); // Append duplicate to banner
});

// Reveal animations for download section
ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right", // Animation starts from the right
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500, // Delay for the section header
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1000, // Delay for the links
});
