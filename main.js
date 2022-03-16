var main_menu = document.getElementById("main-menu-container");

function openMainMenu() {
  if (main_menu.style.display == "") {
    main_menu.style.display = "block";
  } else {
    main_menu.style.display = "";
  }
}

var table_contents = document.getElementById("table-contents-container");

function openTableContents() {
  if (table_contents.style.display == "") {
    table_contents.style.display = "block";
  } else {
    table_contents.style.display = "";
  }
}

var guide_1_contents = document.getElementById("table-contents-articles-container-1");
var guide_arrow_1 = document.getElementById("guide-arrow-1");

function expandGuide_1() {
  if (guide_1_contents.style.display == "") {
    guide_1_contents.style.display = "block";
    guide_arrow_1.style.transform = "rotate(90deg)";
  } else {
    guide_1_contents.style.display = "";
    guide_arrow_1.style.transform = "none";
  }
}

var article_1_contents = document.getElementById("table-contents-links-container-1");
var article_arrow_1 = document.getElementById("article-arrow-1");

function expandArticle_1() {
  if (article_1_contents.style.display == "") {
    article_1_contents.style.display = "block";
    article_arrow_1.style.transform = "rotate(90deg)";
  } else {
    article_1_contents.style.display = "";
    article_arrow_1.style.transform = "none";
  }
}
var article_2_contents = document.getElementById("table-contents-links-container-2");
var article_arrow_2 = document.getElementById("article-arrow-2");

function expandArticle_2() {
  if (article_2_contents.style.display == "") {
    article_2_contents.style.display = "block";
    article_arrow_2.style.transform = "rotate(90deg)";
  } else {
    article_2_contents.style.display = "";
    article_arrow_2.style.transform = "none";
  }
}
