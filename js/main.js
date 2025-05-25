// text typed animation
var typed = new Typed("#typing", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 75,
  loop: true,
});

// contact button
const contactButton = document.getElementById("contact-btn");
contactButton.addEventListener("click", () => {
  document
    .getElementById("contact-section")
    .scrollIntoView({ behavior: "smooth" });
});

// animation for numbers count
const counters = document.querySelectorAll(".numbers-head");
const speed = 100; //
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
