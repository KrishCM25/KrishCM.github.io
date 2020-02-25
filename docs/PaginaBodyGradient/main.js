// Icon Menu
const menuBtn = document.querySelector('.menu-btn');
// const nav = document.querySelector('.menu-container');
// const enlaces = document.querySelectorAll('.enlaces-Internos');

let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        nav.classList.add('open');

        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuOpen = false;
    }
});
// Barra de Navegacion
let ubicacionPrincipal  = window.pageYOffset;
let SnavBar=document.getElementById("nav");

window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    position();
    if((ubicacionPrincipal >= Desplazamiento_Actual) || (ubicacionPrincipal<=600)){
    SnavBar.style.visibility= "visible";
    SnavBar.style.opacity= "1";

    }else {
        SnavBar.style.visibility="hidden";
        SnavBar.style.opacity= "0";
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuOpen=false;
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}
function estilosnavBarUp(){
    SnavBar.style.background= "#00000098";
    
}
function estilosnavBarDown(){SnavBar.style.background= "#00000098";}
function position(){
    if(ubicacionPrincipal<=42){SnavBar.style.background="#102135";
    }else if(ubicacionPrincipal>500){
        estilosnavBarDown();
        setOpacity(".enlaces-Internos");
    }
    else{
        estilosnavBarUp();
        setOpacityOFF(".enlaces-Internos")
    }
}
function setOpacity(className) {
    document.querySelectorAll(className).forEach(el => el.style.color = "#FFF");
}
function setOpacityOFF(className) {
    document.querySelectorAll(className).forEach(el => el.style.color = "#fff");
}
// Ejercicio3

// function rangePar(v1,v2,callback){
//     callback(v1,v2);                                                                                                                                                                    
//   }    
//   var cnt=0;
//   rangePar(1,20,function(v1,v2){

//     for(let i=v1;i<=v2;i++){    
//       if(i%2===0){
//         console.log(i+" ");
//         cnt++;
//       }
//   }
//   console.log(cnt);
// });