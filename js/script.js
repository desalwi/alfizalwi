const setHeight = function() {
      const currentHeight = window.innerHeight;
      document.body.style.height = `${currentHeight}px`;
    }
window.addEventListener("resize", setHeight);
setHeight();




gsap.registerPlugin(Physics2DPlugin) ;


function initConfettiClick() {
  document.addEventListener("click", (event) => {
    // Generate a random number of dots
    const dotCount = gsap.utils.random(15, 30, 1);
    const colors = ["#fd6767ff", "#ffffffff", "#737373ff"]; // Define colors once
    // const colors = ["#0ae448", "#abff84", "#fffce1"]; // Define colors once

    for (let i = 0; i < dotCount; i++) {
      // Create a dot element
      const dot = document.createElement("div");
      dot.classList.add("dot");

      // Append the dot to the body
      document.body.appendChild(dot);

      // Set initial position and styles of the dot
      gsap.set(dot, {
        backgroundColor: gsap.utils.random(colors), // Pick a random color
        top: event.clientY, // position dot at coordinates of the click
        left: event.clientX,
        scale: 0 // Start at scale 0
      });

      // Animate the dot with physics2D
      gsap
        .timeline({
          onComplete: () => dot.remove() // Remove the dot after animation
        })
        .to(dot, {
          scale: gsap.utils.random(0.3, 1), // Scale between 0.5 and 1
          duration: 0.3, // Quick pop-in effect
          ease: "power3.out"
        })
        .to(
          dot,
          {
            duration: 2,
            physics2D: {
              velocity: gsap.utils.random(500, 1000), // Random velocity
              angle: gsap.utils.random(0, 360), // Random direction
              gravity: 1500 // Gravity effect
            },
            autoAlpha: 0, // Fade out towards the end
            ease: "none"
          },
          "<"
        ); // Start together with the previous tween
    }
  });
}

initConfettiClick();


// spawn confetti
gsap.registerPlugin(ScrollTrigger);

function spawnConfetti() {
  const container = document.getElementById("confetti-layer");
  const dotCount = gsap.utils.random(15, 30, 1);
  const colors = ["#e23b3bff", "#4b2323ff", "#ffffffff"];

  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    container.appendChild(dot);

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    gsap.set(dot, {
      backgroundColor: gsap.utils.random(colors),
      top: y,
      left: x,
      scale: 0
    });

    gsap.timeline({ onComplete: () => dot.remove() })
      .to(dot, {
        scale: gsap.utils.random(0.3, 1),
        duration: 0.3,
        ease: "power3.out"
      })
      .to(dot, {
        duration: 2,
        physics2D: {
          velocity: gsap.utils.random(500, 1000),
          angle: gsap.utils.random(0, 360),
          gravity: 1500
        },
        autoAlpha: 0,
        ease: "none"
      }, "<");
  }
}

let confettiInterval;

ScrollTrigger.create({
  trigger: ".closing",
  start: "top 80%",
  end: "bottom top",
  onEnter: () => {
    spawnConfetti();
    confettiInterval = setInterval(spawnConfetti, 3000);
  },
  onLeave: () => clearInterval(confettiInterval),
  onEnterBack: () => {
    spawnConfetti();
    confettiInterval = setInterval(spawnConfetti, 3000);
  },
  onLeaveBack: () => clearInterval(confettiInterval)
});
