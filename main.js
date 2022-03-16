var main_menu = document.getElementById("main-menu-container");

function openMainMenu(){
    if(main_menu.style.display== ""){
        main_menu.style.display="block";
    }else{
        main_menu.style.display="";
    }
}