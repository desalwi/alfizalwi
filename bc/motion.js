gsap.registerPlugin(ScrollTrigger);

gsap.to(".mailpack", {
    y: 2500, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".frontmail",
      start: "bottom 86%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    //   markers: true,
      scrub: true,
      duration: 8,
    },
  });

//   gsap.ticker.add(() => {
//   const mailpackmove = document.querySelector(".mailpack");
//   const mailpack_bgmove = document.querySelector(".mailpack_bg");

//   const transform = getComputedStyle(mailpackmove).transform;
//   mailpack_bgmove.style.transform = transform;
// });

gsap.to(".mailpack_bg", {
    y: 2500, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".backmail",
      start: "bottom 86%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    //   markers: true,
      scrub: true,
      duration: 8,
    },
  });

gsap.to(".mainpagecover_content", {
    y: 2500, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".mainpagecover",
      start: "bottom 86%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    //   markers: true,
      scrub: true,
      duration: 8,
    },
  });
  
gsap.to(".toggle_ghost", {
    y: 2500, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".mailpack",
      start: "bottom 90%",
      end: "bottom top",
      toggleActions: "play none none reverse",
    //   markers: true,
      scrub: true,
      duration: 8,
    },
  });







  gsap.to(".subtitle-container", {
    y: 400, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".mailpack",
      start: "bottom 90%",
      end: "bottom top",
    //   markers: true,
      scrub: true,
      duration: 2,
      // delay: ,
    },
  });
  gsap.to(".walimatultext", {
    y: 400, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".mailpack",
      start: "bottom 90%",
      end: "bottom top",
    //   markers: true,
      scrub: true,
      duration: 2,
      // delay: ,
    },
  });

  gsap.to(".leftdan", {
    y: 300, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".mailpack",
      start: "bottom 90%",
      end: "bottom top",
    //   markers: true,
      scrub: true,
      duration: 2,
      // delay: ,
    },
  });
  gsap.to(".rightdan", {
    y: 300, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".mailpack",
      start: "bottom 90%",
      end: "bottom top",
    //   markers: true,
      scrub: true,
      duration: 2,
      // delay: ,
    },
  });


  gsap.to(".tanggalhero", {
    y: 300, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".mailpack",
      start: "bottom 90%",
      end: "bottom top",
    //   markers: true,
      scrub: true,
      duration: 2,
      // delay: ,
    },
  });


//   gsap.to(".mainpage", {
//     y: -600, // move up
//     // top: 0,
//     // left: 0,
//     // right: 0,
//     // bottom: 0,
//     // scale: 5,
//     width: "100dvw",   // set to full viewport width
//     height: "100dvh",
//     // zIndex: 9999,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".mailpack",
//       start: "bottom 100%",
//       end: "bottom top",
//       markers: true,
//       scrub: true,
//     },
//   });



//   timeline
// const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".mainpage",
//       start: "bottom 100%",
//       end: "bottom 50%",
//       scrub: true,
//     }
//   });

//    // Step 1: Move .mainpage upward
//   tl.to(".mainpage", {
//     y: -200,
//     // onComplete: () => {
//     //   document.querySelector('.mainpage').style.transform = 'translate(-50%, -50%)';
//     // },

//     // onComplete: () => {
//     //   const ell = document.querySelector('.mainpage');
//     // //   ell.style.position = 'fixed';
//     // //   ell.style.top = '-10%';
//     // //   ell.style.left = '50%';
//     // //   ell.style.left = '0';
//     // //   ell.style.right = '-10%';
//     // //   ell.style.bottom = '-10%';
//     // //   ell.style.transform = 'translate(-50%, -50%)'; // Ensure it stays in place
//     // },

    

//     duration: 1
//   });

//   TweenMax.set(
//     ".mainpage", {
//         left: "50%", 
//         top: "50%", 
//         xPercent: -50, 
//         yPercent: 25}
//     );

//   // Step 2: Expand to fullscreen
//   tl.to(".mainpage", {
//     y: 0,

//     left: "0%", 
//     top: "0%", 
//     xPercent: 0, 
//     yPercent: 0,

//     width: "100dvw",
//     height: "100dvh",
//     // top: 0,
//     // left: 0,
//     // right: 0,
//     // bottom: 0,
//     zIndex: 9999,
//     duration: 1,

//     // onComplete: () => {
//     //     gsap.set(".mainpage", { xPercent: 0 });
//     // }


//     onStart: () => {
//         // gsap.set(".mainpage", { xPercent: 0 }); 
//         const el = document.querySelector('.mainpage');
//         el.style.position = 'fixed';
//     //   el.style.left = '80%';
//     //   el.style.transform = 'translate(0, 0)'; // Ensure it stays in place
//     //   el.style.transform = 'translate(-50%, -50%)'; // Ensure it stays in place
//     //   el.style.transform = 'translate(-80%, 0)'; // Ensure it stays in place
//     },


//     // onComplete: () => {
//     //   const elll = document.querySelector('.mainpage');
//     // //   elll.style.position = 'fixed';
//     //   elll.style.left = '0px';
//     //   elll.style.transform = 'translate(0, 0)'; // Ensure it stays in place
//     // //   elll.style.transform = 'translate(-50%, -50%)'; // Ensure it stays in place
//     // },

//     // onComplete: () => {
//     //     gsap.set(".mainpage", { xPercent: 0 });
//     // }

//     // reverse();

//   });

//   tl.to(".mainpage", {
//     y: 0,

//     left: "0%", 
//     top: "0%", 
//     xPercent: 0, 
//     yPercent: 0,

//     width: "100dvw",
//     height: "100dvh",
//     // top: 0,
//     // left: 0,
//     // right: 0,
//     // bottom: 0,
//     zIndex: 9999,
//     duration: 2,


//     onStart: () => {
//       const el = document.querySelector('.mainpage');
//       el.style.position = 'fixed';
//     //   el.style.left = '80%';
//     //   el.style.transform = 'translate(0, 0)'; // Ensure it stays in place
//     //   el.style.transform = 'translate(-50%, -50%)'; // Ensure it stays in place
//     //   el.style.transform = 'translate(-80%, 0)'; // Ensure it stays in place
//     },

//   });


const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".mainpage",
      start: "bottom 90%",
      end: "bottom 60%",
      scrub: true,
      // markers:  true
    }
  });

   // Step 1: Move .mainpage upward
  tl.to(".mainpage", {
    y: -150,
    duration: 1,
  });

  // Step 2: Expand to fullscreen
  tl.to(".mainpage", {
    y: 0,

    left: "0%", 
    top: "0%", 
    xPercent: 0, 
    yPercent: 0,

    width: "100dvw",
    height: "100dvh",
    zIndex: 9999,
    duration: 1,    

    onStart: () => {
      const el = document.querySelector('.mainpage');
      el.style.position = '5';
      // el.style.position = 'fixed';
    //   el.style.left = '80%';
    //   el.style.transform = 'translate(0, 0)'; // Ensure it stays in place
    //   el.style.transform = 'translate(-50%, -50%)'; // Ensure it stays in place
    //   el.style.transform = 'translate(-80%, 0)'; // Ensure it stays in place
    },

  });










  // spin

  gsap.to(".alogo", {
    rotation: 360,
    scrollTrigger: {
      trigger: ".mainpage",
      start: "bottom 80%",
      end: "bottom 50%",
      scrub: true,
      // markers: true,
    },
    ease: "none"
  });
  
  // const alogoTimeline = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".mainpage",
  //     start: "bottom 80%",
  //     end: "bottom 50%",
  //     scrub: true,
  //     markers: true,
  //   }
  // });
  
  // alogoTimeline.to(".alogo", {
  //   rotation: 360,
  //   // y: -20,
  //   // scale: 0.8,
  //   ease: "none" // important for scrubbed animations
  // });
  // alogoTimeline.to(".alogo", {
  //   // rotation: 360,
  //   y: -20,
  //   scale: 0.8,
  //   ease: "none" // important for scrubbed animations
  // });

  gsap.to(".alogo_wrap", {
    scale: 0.8,
    // y: -20,
    scrollTrigger: {
      trigger: ".salam_content",
      start: "bottom 80%",
      end: "bottom 60%",
      scrub: true,
      // markers: true,
    },
    ease: "none" // important for scrubbed animations 
  });

  // const spinalogo = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".alogo",
  //     start: "bottom 80%",
  //     end: "bottom 50%",
  //     scrub: true,
  //   }
  // });

  //  // Step 1: Move .mainpage upward
  // spinalogo.to(".alogo", {
  //   rotation: 360
  // });




  // PIN SALAM

  // ScrollTrigger.create({
  //   trigger: ".salam_content",
  //   start: "top 20%",
  //   end: "bottom 50%",
  //   pin: ".salam_content",
  //   // markers: true,
  //   pinSpacing: false // optional: removes extra space
  // });


  ScrollTrigger.create({
    trigger: ".salam_container",
    start: "top 20%",
    end: "bottom 50%",
    // end: () => "+=" + (window.innerHeight * 2), // 3 sections
    pin: ".salam",
    pinSpacing: false, // prevent extra space
    scrub: false,
    // markers: {
    //   startColor: "purple",
    //   endColor: "purple",
    //   fontSize: "14px",
    //   fontWeight: "bold"
    // }
    // markers: true
  });

  ScrollTrigger.create({
    trigger: ".subsalam",
    start: "top 35%",
    end: "bottom 50%",
    pin: ".subsalam_content",
    pinSpacing: false, // prevent extra space
    scrub: false,
    // markers: true
    // markers: {
    //   startColor: "blue",
    //   endColor: "blue",
    //   fontSize: "11px",
    //   fontWeight: "bold"
    // }
  });

  


  //heading split type

document.addEventListener('DOMContentLoaded', function() {
    const splitText = document.querySelectorAll('.textrevealA-container');
    splitText.forEach((char, i) => {
        const text = new SplitType(char, { types: ['chars', 'words'] });
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 60%',
                end: 'top 5%',
                toggleActions: "play none none reverse",
                //              restart play pause resume reverse reset complete(jump to finish) none 
                //              onEnter onLeave onEnterBack onLeaveBack
                // scrub: 2,
                // markers: true,
            },
            // opacity: 0.2,
            // stagger: 0.1,
            yPercent: 120,
            // xPercent: 120,
            // scale: 0.8,
            // skewX: 10,
            rotation: 180,
            stagger: 0.05,
            // ease: "back.out",
            // ease: "elastic.out",
            ease: "power3.inOut",
            duration: .5,
            delay: .25
            
        });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const splitText = document.querySelectorAll('.textrevealAA-container');
    splitText.forEach((char, i) => {
        const text = new SplitType(char, { types: ['chars', 'words'] });
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 45%',
                end: 'top 5%',
                toggleActions: "play none none reverse",
                //              restart play pause resume reverse reset complete(jump to finish) none 
                //              onEnter onLeave onEnterBack onLeaveBack
                // scrub: 2,
                // markers: true,
            },
            // opacity: 0.2,
            // stagger: 0.1,
            yPercent: 120,
            rotation: 180,
            stagger: 0.05,
            // ease: "back.out",
            // ease: "elastic.out",
            ease: "power3.inOut",
            duration: .5,
            delay: .25
            
        });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const splitText = document.querySelectorAll('.textanmopacity-container');
    splitText.forEach((char, i) => {
        const text = new SplitType(char, { types: ['chars', 'words'] });
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 45%',
                end: 'top 5%',
                toggleActions: "play none none reverse",
                //              restart play pause resume reverse reset complete(jump to finish) none 
                //              onEnter onLeave onEnterBack onLeaveBack
                scrub: 2,
                // markers: true,
            },
            opacity: 0,
            // stagger: 0.1,
            // yPercent: 120,
            // rotation: 180,
            stagger: 0.05,
            // ease: "back.out",
            // ease: "elastic.out",
            ease: "power3.inOut",
            duration: .5,
            delay: .25
            
        });
    });
  });












  // MORPH SVG
gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#start", {
      duration: 2,
      morphSVG: "#end",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

// TweenMax.to("#start", 1, {
//   morphSVG: "#end",
//   ease: Power2.easeInOut
// });

// gsap.to("#start", { duration: 1, morphSVG: "#end" });