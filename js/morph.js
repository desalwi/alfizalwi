gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#start", {
      duration: 2,
      morphSVG: "#end",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });



gsap.registerPlugin(Physics2DPlugin) ;


function initConfettiClick() {
  document.addEventListener("click", (event) => {
    // Generate a random number of dots
    const dotCount = gsap.utils.random(15, 30, 1);
    const colors = ["#0a2ee40a", "#b56fe708", "#f14e740a"]; // Define colors once
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

// function spawnConfettiAtClosing() {
//   const closing = document.querySelector(".closing");
//   if (!closing) return;

//   const rect = closing.getBoundingClientRect();
//   const x = rect.left + rect.width / 2 + window.scrollX;
//   const y = rect.top + rect.height / 2 + window.scrollY;

//   const dotCount = gsap.utils.random(15, 30, 1);
//   const colors = ["#0a2ee40a", "#b56fe708", "#f14e740a"];

//   for (let i = 0; i < dotCount; i++) {
//     const dot = document.createElement("div");
//     dot.classList.add("dot");
//     document.body.appendChild(dot);

//     gsap.set(dot, {
//       backgroundColor: gsap.utils.random(colors),
//       top: y,
//       left: x,
//       scale: 0,
//       position: "absolute",
//       zIndex: 9999
//     });

//     gsap.timeline({
//       onComplete: () => dot.remove()
//     })
//       .to(dot, {
//         scale: gsap.utils.random(0.3, 1),
//         duration: 0.3,
//         ease: "power3.out"
//       })
//       .to(dot, {
//         duration: 2,
//         physics2D: {
//           velocity: gsap.utils.random(500, 1000),
//           angle: gsap.utils.random(0, 360),
//           gravity: 1500
//         },
//         autoAlpha: 0,
//         ease: "none"
//       }, "<");
//   }
// }

// // Run automatically every 3s
// setInterval(spawnConfettiAtClosing, 3000);



setInterval(() => {
  const el = document.querySelector('.closing');
  if (el) {
    const rect = el.getBoundingClientRect(); // element's size & position

    const x = rect.left + rect.width / 2;  // middle X
    const y = rect.top + rect.height / 2;  // middle Y

    el.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: x,
      clientY: y
    }));
  }
}, 3000);
