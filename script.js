// LOCOMOTIVE JS | SCROLL SMOOTH
(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

// INITIATE GSAP PROPERTIES 
gsap.registerPlugin(ScrollTrigger) 
gsap.registerPlugin(TextPlugin)

   let  nepaliDayOfWeek = ''

setInterval(() => {
             let currentTime = new Date();
             let hours = currentTime.getHours();
            let minutes = currentTime.getMinutes();
            let seconds = currentTime.getSeconds();

            // FUNCTION CALLED AFTER EVERY 1S 
    setTime(hours, minutes, seconds)
}, 1000);
// nepali day of week 
    const daysOfWeekNepali = ['आइतबार', 'सोमबार', 'मगलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'];
    const now = new Date();
    const dayIndex = now.getDay(); // 0 for Sunday, 1 for Monday, and so on...
  nepaliDayOfWeek= daysOfWeekNepali[dayIndex];
//   day 
  const day = now.getDate().toString().padStart(2, '0');
  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
let setTime = (hours, minutes, seconds)=>{
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            // Format time in 12-hour format
            let timeString = hours % 12 + ':' + minutes + ':' + seconds + ' ' + (hours >= 12 ? 'PM' : 'AM');
            
            let timeHere = document.querySelector(".timeHere");
            let weekDay = document.querySelector(".weekDay");
            let dayHere = document.querySelector(".dayHere");
            timeHere.textContent = timeString;
            dayHere.textContent = day;
            weekDay.textContent =   nepaliDayOfWeek;
}


// GSAP | SCROLL AND TEXT 
 gsap.to(".fSlogan", {
    duration:5, 
    color:'green', 
    delay:1, 
    text:"YOUR SUCCES IS OUR PRIORITY", 
    repeat:50,
    ease: "rough",
});
 gsap.registerPlugin(TextPlugin)    // YOUR SUCCESS IS OUR PRIORITY
 gsap.to(".sSlogan", {
    duration:6, 
    color:'rgb(187 89 203)', 
    delay:3, 
    repeat:50,
    yoyo:true,
    scale:1.5,
    scrub:3,
});


// MOUSE FOLLOWER 
gsap.to(".timeAndDate, .fSlogan", {
    scrollTrigger: {
        trigger: "#box3", 
        toggleActions:"play pause resume reset", //onEnter, onLeave, onEnterBack, onLeaveBack
        scrub:3,
      }, //when box 3 comes in viewport then only apply animation.
      x:300,
      duration:3,
      color:"#1c3551", 
})
