// var container = document.querySelector('.slider__parent--container');

// var slide2 = document.querySelector('.slider--2');

// var isInViewport = function (elem) {
//     var bounding = elem.getBoundingClientRect();
//   console.log(bounding);
//     return (
//         bounding.top >= 0 &&
//         bounding.left >= 0 &&
//         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };

// window.addEventListener('scroll', function (event) {
//   if (isInViewport(container)) {
//     console.log('we dey');
// }else{
//   //do nothing
//   console.log('we no dey');
// }
// })

// window.addEventListener('scroll', function (event) {
//   console.log(window.scrollY);
//   console.log(container.pageYoffset)
//   slide2.style.transform = `translate(${100-container.pageYoffset/100}%, 0%)`;

// })

//my thought process
//make the container for the three elements have a fixed position

//translate 2 out the bg(100% right and 100% bottom)
//check if the container that houses the three elements is fully in view.

//use some mouse scroll event thingy to dynamically change the translate property for all the three bg

//then once they have all been animated right, i change the container of the three elements from position fixed to anything else

//having to use gsap
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 10 });

let slides = gsap.utils.toArray("slider");
const tl = gsap.timeline();
tl.from(".slider--2", { yPercent: -100 }).from(".slider--3", { xPercent: 100 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".slider__parent--container",
  start: "top top",
  // end: "+=4000",
  end: () =>
    "+=" + document.querySelector(".slider__parent--container").offsetWidth,
  scrub: true,
  pin: true,
  anticipatePin: true,
  snap: 1 / (slides.length - 2),
});
