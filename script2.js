for(let i=0;i<10;i++){
 console.log("imprimo valor de " +i);
}


function Sumar (){
    let a=100;
    let b=600;
    s1=a+b;
    return s1;
}

s2=Sumar();



let tiempo = 5000;
let posicion=100;
let color ="#fff";


anime({
    targets:".cuadro3",
    translateX:[s2,800],
    top:posicion,
    duration:tiempo,
    loop:true,
    backgroundColor: color,
    opacity:0.01,
    
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad'
}) 