const phoneMenu=document.getElementById("phone-menu");
const closeMenu=document.getElementById("close-menu");
const menu =document.getElementById("menu");
const pageWidth = window.innerWidth;

menu.onclick=function(){
// code line starts here ;

    phoneMenu.style.display="block";
    phoneMenu.style.width="250px";
    // phoneMenu.style.transform="translateX(0)"
    

};
closeMenu.onclick=function(){
// code line starts here ;
phoneMenu.style.display="none";

}
