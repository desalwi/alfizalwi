gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// gsap.registerPlugin(ScrollSmoother);

// let smoother = ScrollSmoother.create({
//   wrapper: ".smooth_wrapper",
//   content: ".smooth_content",
//   // smooth: 1,
//   // effects: true,
//   // smoothtouching: true
// });


gsap.to(".mailpack", {
    y: 2500, // move down
    ease: "none",
    scrollTrigger: {
      trigger: ".frontmail",
      start: "bottom 69%",
      end: "bottom 20%",
      toggleActions: "play none none reset",
      // markers: true,
      // markers: {
      //   startColor: "purple",
      //   endColor: "purple",
      //   fontSize: "14px",
      //   fontWeight: "bold"
      // },
      scrub: true,
      duration: 8,
      opacity: 0,
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
      trigger: ".frontmail",
      start: "bottom 69%",
      end: "bottom 20%",
      toggleActions: "play none none reset",
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
      start: "bottom 75%",
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
      start: "bottom 75%",
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
      start: "bottom 75%",
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
      start: "bottom 75%",
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
      start: "bottom 75%",
      end: "bottom top",
    //   markers: true,
      scrub: true,
      duration: 2,
      // delay: ,
    },
  });



    gsap.to(".daisyspin", {
    // y: 300, // move down
    ease: "none",
    rotate: 1050,
    scrollTrigger: {
      trigger: ".salam",
      start: "bottom 100%",
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
      trigger: ".midmail",
      start: "bottom 60%",
      end: "bottom 20%",
      scrub: true,
      // markers: true
    }
  });

   // Step 1: Move .mainpage upward
  tl.to(".mainpage", {
    y: 0,
    yPercent: 50,
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
    height: "100vh",
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
    end: "bottom 100%",
    // end: () => "+=" + (window.innerHeight * 2), // 3 sections
    pin: ".salam",
    pinSpacing: false, // prevent extra space
    scrub: false,
    // markers: {
    //   startColor: "purple",
    //   endColor: "pink",
    //   fontSize: "14px",
    //   fontWeight: "bold"
    // }
    // markers: true
  });

  ScrollTrigger.create({
    trigger: ".salam_container",
    start: "top 20%",
    end: "bottom 100%",
    pin: ".subsalam_content",
    pinSpacing: false, // prevent extra space
    scrub: false,
    // markers: true
    // markers: {
    //   startColor: "teal",
    //   endColor: "teal",
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
                start: 'top 100%',
                end: 'top 5%',
                // toggleActions: "play none none reset",
                toggleActions: "play none none none",
                //              restart play pause resume reverse reset complete(jump to finish) none 
                //              onEnter onLeave onEnterBack onLeaveBack
                // scrub: 2,
                // markers: true,
            },
            // opacity: 0.2,
            stagger: 0.025,
            yPercent: 120,
            // xPercent: 120,
            // scale: 0.8,
            // skewX: 10,
            // rotation: 180,
            // stagger: 0.05,
            // ease: "back.out",
            // ease: "elastic.inOut",
            // ease: "elastic.out(1,0.3)",
            ease: "power3.inOut",
            duration: .5,
            delay: 0
            
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
                start: 'top 100%',
                end: 'top 5%',
                // toggleActions: "play none none reset",
                toggleActions: "play none reverse none",
                //              restart play pause resume reverse reset complete(jump to finish) none 
                //              onEnter onLeave onEnterBack onLeaveBack
                // scrub: 2,
                // markers: true,
            },
            // opacity: 0.2,
            stagger: 0.025,
            yPercent: 120,
            // rotation: 180,
            // stagger: 0.05,
            // ease: "back.out",
            // ease: "elastic.inOut",
            // ease: "elastic.out(1,0.3)",
            ease: "power3.inOut",
            duration: .5,
            delay: .5
            
        });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const splitText = document.querySelectorAll('.textrevealjam-container');
    splitText.forEach((char, i) => {
        const text = new SplitType(char, { types: ['chars', 'words'] });
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 100%',
                end: 'top 5%',
                // toggleActions: "play none none reset",
                toggleActions: "play complete complete complete",
                //              restart play pause resume reverse reset complete(jump to finish) none 
                //              onEnter onLeave onEnterBack onLeaveBack
                // scrub: 2,
                // markers: true,
            },
            // opacity: 0.2,
            stagger: 0.025,
            yPercent: 120,
            // rotation: 180,
            // stagger: 0.05,
            // ease: "back.out",
            // ease: "elastic.inOut",
            // ease: "elastic.out(1,0.3)",
            ease: "power3.inOut",
            duration: .5,
            delay: .5
            
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
                start: 'top 80%',
                end: 'top 5%',
                // toggleActions: "play none none reset",
                toggleActions: "play none reverse none",
                //              restart play pause resume reverse reset complete(jump to finish) none 
                //              onEnter onLeave onEnterBack onLeaveBack
                scrub: 1,
                // markers: {
                //   startColor: "blue",
                //   endColor: "yellow",
                //   fontSize: "11px",
                //   fontWeight: "bold"
                // }
                // markers: true,
            },
            opacity: 0.1,
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


  ScrollTrigger.create({
    trigger: ".wedbgwrap",
    start: "top 25%",
    end: "bottom 80%",
    // end: () => "+=" + (window.innerHeight * 2), // 3 sections
    pin: ".wedbgcontent",
    pinSpacing: false, // prevent extra space
    scrub: false,
    // markers: {
    //   startColor: "purple",
    //   endColor: "black",
    //   fontSize: "14px",
    //   fontWeight: "bold"
    // }
    // markers: true
  });
  
  // ScrollTrigger.create({
  //   trigger: ".wedname",
  //   start: "top 30%",
  //   end: "bottom 10%",
  //   // end: () => "+=" + (window.innerHeight * 2), // 3 sections
  //   pin: ".wedname_one",
  //   pinSpacing: false, // prevent extra space
  //   scrub: false,
  //   markers: {
  //     startColor: "yellow",
  //     endColor: "blue",
  //     fontSize: "18px",
  //     fontWeight: "bold"
  //   }
  //   // markers: true
  // });




  //pin timeplace

    ScrollTrigger.create({
    trigger: ".timeplace",
    start: "top 15%",
    end: "bottom 10%",
    // end: () => "+=" + (window.innerHeight * 2), // 3 sections
    pin: ".timeplace_head",
    pinSpacing: false, // prevent extra space
    scrub: false,
    // markers: {
    //   startColor: "purple",
    //   endColor: "black",
    //   fontSize: "14px",
    //   fontWeight: "bold"
    // }
    // markers: true
  });

        gsap.to(".calendar_tanggal", {
    // y: 300, // move down
    ease: "none",
    // onStart: () => gsap.set(".calendar_tanggal", { x: 400 }),
    x: 0,
    scrollTrigger: {
      trigger: ".timeplace",
      start: "top 45%",
      endTrigger: ".date",
      end: "top 30%",
      // markers: true,
      scrub: 2,
      duration: 2,
      // delay: ,
    },
  });

// const cards = document.querySelectorAll(".timeplace_cardwrap");
// cards.forEach((card, i) => {
//   ScrollTrigger.create({
//     trigger: card,
//     start: "top 23%",       // when card hits top
//     pin: true,              // pin it
//     pinSpacing: false,      // so next one comes right after
//     // pushFollowers: false,  // (deprecated, pinSpacing:false does this job)
//     markers: true,        // for debugging
//     end: () => "+=" + card.offsetHeight // each stays pinned until its height
//   });
// });

let cards = gsap.utils.toArray(".timeplace_cardwrap");

cards.forEach((card, i) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 17%",
    endTrigger: ".timeplace_container",   // parent container
    end: "bottom 70%",
    pin: true,
    pinSpacing: false, // so they overlap into a stack
    // markers: true,
    // end: () => 
    //   "+=" + cards.reduce((total, el) => total + el.offsetHeight, 0) // combined height
  });
});


  //     ScrollTrigger.create({
  //   trigger: ".timeplace",
  //   start: "top 15%",
  //   end: "bottom 10%",
  //   // end: () => "+=" + (window.innerHeight * 2), // 3 sections
  //   pin: ".timeplace_container",
  //   pinSpacing: false, // prevent extra space
  //   scrub: false,
  //   // markers: {
  //   //   startColor: "purple",
  //   //   endColor: "black",
  //   //   fontSize: "14px",
  //   //   fontWeight: "bold"
  //   // }
  //   // markers: true
  // });





  //       ScrollTrigger.create({
  //   trigger: ".timeplace_head",
  //   start: "top 30%",
  //   end: "bottom 10%",
  //   // end: () => "+=" + (window.innerHeight * 2), // 3 sections
  //   pin: ".jam",
  //   pinSpacing: false, // prevent extra space
  //   scrub: false,
  //   // markers: {
  //   //   startColor: "purple",
  //   //   endColor: "black",
  //   //   fontSize: "14px",
  //   //   fontWeight: "bold"
  //   // }
  //   // markers: true
  // });


  //         ScrollTrigger.create({
  //   trigger: ".timeplace_head",
  //   start: "top 40%",
  //   end: "bottom 10%",
  //   // end: () => "+=" + (window.innerHeight * 2), // 3 sections
  //   pin: ".map",
  //   pinSpacing: false, // prevent extra space
  //   scrub: false,
  //   // markers: {
  //   //   startColor: "yellow",
  //   //   endColor: "yellow",
  //   //   fontSize: "14px",
  //   //   fontWeight: "bold"
  //   // }
  //   // markers: true
  // });




  //pin adab

    ScrollTrigger.create({
    trigger: ".adab",
    start: "top 26%",
    end: "bottom 10%",
    // end: () => "+=" + (window.innerHeight * 2), // 3 sections
    pin: ".adab_head",
    pinSpacing: false, // prevent extra space
    scrub: false,
    // markers: {
    //   startColor: "purple",
    //   endColor: "black",
    //   fontSize: "14px",
    //   fontWeight: "bold"
    // }
    // markers: true
  });



//adab title color change

    gsap.to(".adab_head", {
    // y: 300, // move down
    color: "#F2CCCC",
    ease: "power1.out",
    // onStart: () => gsap.set(".calendar_tanggal", { x: 400 }),
    // x: 0,
    scrollTrigger: {
      trigger: ".adabTwoCopy",
      start: "bottom 100%",
      // endTrigger: ".date",
      end: "bottom 80%",
      // markers: true,
      toggleActions: "play none none reset",
      // scrub: 1,
      duration: 12,
      // delay: ,
    },
  });


  //adab section bg.change maainpage bg color

    gsap.to(".mainpage", {
    // y: 300, // move down
    backgroundColor: "#CBB3CC",
    ease: "power1.out",
    // onStart: () => gsap.set(".calendar_tanggal", { x: 400 }),
    // x: 0,
    scrollTrigger: {
      trigger: ".adabTwoCopy",
      start: "bottom 100%",
      // endTrigger: ".date",
      end: "bottom 80%",
      // markers: true,
      // toggleActions: "play none none reset",
      toggleActions: "play none reverse none",
      // scrub: 1,
      duration: 12,
      // delay: ,
    },
  });



    //petal one parallax

  //   gsap.to(".petalone", {
  //   y: 1510, // move down
  //   // backgroundColor: "#CBB3CC",
  //   // ease: "power1.out",
  //   // onStart: () => gsap.set(".calendar_tanggal", { x: 400 }),
  //   // x: 0,
  //   scrollTrigger: {
  //     trigger: ".adab",
  //     start: "top 10%",
  //     // endTrigger: ".date",
  //     end: "bottom 80%",
  //     markers: true,
  //     // toggleActions: "play none none reset",
  //     // toggleActions: "play reverse play reverse",
  //     scrub: true,
  //     // duration: 12,
  //     // delay: ,
  //   },
  // });


// PETALONE (slow, background-like)
gsap.to(".petalone", {
  y: () => window.innerHeight * 1, // small movement = slower
  ease: "none",
  rotate: -180,
  scrollTrigger: {
    trigger: ".adab",
    start: "top bottom",   // when .adab enters viewport
    end: "bottom top",     // until it fully leaves
    scrub: true,
  }
});
gsap.to(".petaltwo", {
  y: () => window.innerHeight * .01, // small movement = slower
  ease: "none",
  rotate: 180,
  scrollTrigger: {
    trigger: ".adab",
    start: "top bottom",   // when .adab enters viewport
    end: "bottom top",     // until it fully leaves
    scrub: true,
  }
});

// ADAB LIST (foreground, faster)
gsap.to(".adab_list", {
  y: () => window.innerHeight * .4, // bigger movement = faster
  ease: "none",
  scrollTrigger: {
    trigger: ".adab",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    // markers: true
  }
});

  //pin closing

    ScrollTrigger.create({
    trigger: ".closing",
    start: "top 20%",
    end: "bottom 10%",
    // end: () => "+=" + (window.innerHeight * 2), // 3 sections
    pin: ".closing_head",
    pinSpacing: false, // prevent extra space
    scrub: false,
    // markers: {
    //   startColor: "purple",
    //   endColor: "black",
    //   fontSize: "14px",
    //   fontWeight: "bold"
    // }
    // markers: true
  });


    //closing section bg.change maainpage bg color

  //   gsap.to(".mainpage", {
  //   // y: 300, // move down
  //   backgroundColor: "#2d1213ff",
  //   ease: "power1.out",
  //   // onStart: () => gsap.set(".calendar_tanggal", { x: 400 }),
  //   // x: 0,
  //   scrollTrigger: {
  //     trigger: ".closing",
  //     start: "top 100%",
  //     // endTrigger: ".date",
  //     end: "bottom 80%",
  //     // markers: true,
  //     // toggleActions: "play none none reset",
  //     toggleActions: "play reverse play reverse",
  //     // scrub: 1,
  //     duration: 12,
  //     // delay: ,
  //   },
  // });



// COUNT UP CLOCK
// gsap.to(".jam_number_left", {
//   innerText: 10,
//   duration: .5,
//   snap: { innerText: 1 },
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".jam",
//     start: "top 80%",
//     end: "bottom top",
//     // scrub: true,
//     // markers: true
//   }
// });

const digits = document.querySelectorAll(".jam_digit");
const tls = gsap.timeline({
  scrollTrigger: {
    trigger: ".jam_number",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

digits.forEach((digit) => {
  let endValue = parseInt(digit.innerText, 10);
  let obj = { val: 0 };

  tls.to(obj, {
    val: endValue,
    duration: 0.5,
    ease: "none",
    snap: { val: 1 },
    onUpdate: () => {
      digit.innerText = obj.val;
    }
  });
});
