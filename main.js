var main_menu = document.getElementById("main-menu-container");

function openMainMenu(){
    if(main_menu.style.display== ""){
        main_menu.style.display="block";
    }else{
        main_menu.style.display="";
    }
}

var table_contents = document.getElementById("table-contents-container");

function openTableContents(){
    if(table_contents.style.display ==""){
        table_contents.style.display="block";
    }else{
        table_contents.style.display="";
    }
}