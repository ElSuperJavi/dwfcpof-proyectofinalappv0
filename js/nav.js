//nav scroleando XD

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    let logo1 = this.document.querySelector(".logo");
    let logo2 =this.document.querySelector(".logo2");
    header.classList.toggle("down",this.window.scrollY>0);
    logo1.classList.toggle("logo-oculto",this.window.scrollY>0);
    logo2.classList.toggle("logo-nav-vs",this.window.scrollY>0);
});

//menu escondido

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
    document.getElementById("show-menu").classList.toggle('mostrar-costado');
}


//btn ayudar

document.getElementById("enlaceHelp").addEventListener("click", mostrar_enlace);
function mostrar_enlace(){
    document.getElementById("vertical").classList.toggle('visible');
}
