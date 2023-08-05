/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function navbarshow() {
  document.getElementById("sidenav").style.width = "160px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function navbarhide() {
  document.getElementById("sidenav").style.width = "0";
} 

function fadeInElements() {
  const fadeElements = document.querySelectorAll(".fade-in-element");

  fadeElements.forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)"; // Set the final translation to 0, effectively bringing the element back to its original position
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function onScroll() {
  const fadeElements = document.querySelectorAll(".fade-in-element");

  fadeElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)"; // Bring the element back to its original position if it is in view
    } else {
      element.style.opacity = "0"; // Reset opacity to 0 when hidden from view
      element.style.transform = "translateY(20px)"; // Set the initial translation distance when hidden from view
    }
  });
}



document.addEventListener("DOMContentLoaded", () => {
  fadeInElements(); // Fade-in elements on page load
  onScroll(); // Check for elements to fade in when the user starts scrolling
});

function isScrollbarVisible() {
  return document.documentElement.scrollHeight > window.innerHeight;
}

function gototop() {
  if (isScrollbarVisible()) {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top with smooth behavior
  } else {
    // Handle the case when the scrollbar is not visible or not needed
    console.log("Scrollbar is not visible or not needed.");
  }
}


document.addEventListener("scroll", onScroll);


if (isScrollbarVisible()) {
  console.log("Scrollbar is visible.");
} else {
  console.log("Scrollbar is not visible.");
}
