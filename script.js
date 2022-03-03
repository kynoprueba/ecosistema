gsap.registerPlugin(ScrollTrigger);

gsap.to(".cuadro1",{
    scrollTrigger:{
    trigger:".cuadro1",
    start:"top 60%",
 
    toggleActions:"restart reverse none none"
   },
  x:800,
  rotation:360,
  duration:4
 
});