// // ==ON=LOAD==IN=THIS=ARTICLE==STYLE=CHANGE=(ADD ACTIVE CLASS ON PAGE LOAD)==
// var articleSectionTab_1 = document.getElementById("article-section-1-tab");

// window.onload = function articleTabStyle() {
//   articleSectionTab_1.classList.add("active");
// };

// ==SCROLL=CHANGE=IN=THIS=ARTICLE=STYLING==SECTION_1==///////////////
const section_1 = document.querySelector("#article-1-section-1-text");
const articleSectionTab_1 = document.querySelector("#article-section-1-tab");

const navObserver = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      articleSectionTab_1.classList.remove("active");
    } else {
      articleSectionTab_1.classList.add("active");
    }
  },
  {
    threshold: 0.3,
  }
);
navObserver.observe(section_1);

// ==SCROLL=CHANGE=IN=THIS=ARTICLE=STYLING==SECTION_2==///////////////
const section_2 = document.querySelector("#article-1-section-2-text");
const articleSectionTab_2 = document.querySelector("#article-section-2-tab");

const navObserver2 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      articleSectionTab_2.classList.remove("active");
    } else {
      articleSectionTab_2.classList.add("active");
    }
  },
  {
    threshold: 0.3,
  }
);
navObserver2.observe(section_2);

// ==SCROLL=CHANGE=IN=THIS=ARTICLE=STYLING==SECTION_3==///////////////
const section_3 = document.querySelector("#article-1-section-3-text");
const articleSectionTab_3 = document.querySelector("#article-section-3-tab");

const navObserver3 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      articleSectionTab_3.classList.remove("active");
    } else {
      articleSectionTab_3.classList.add("active");
    }
  },
  {
    threshold: 0.3,
  }
);
navObserver3.observe(section_3);

// ==SCROLL=CHANGE=IN=THIS=ARTICLE=STYLING==SECTION_3==///////////////
const section_4 = document.querySelector("#article-1-section-4-text");
const articleSectionTab_4 = document.querySelector("#article-section-4-tab");

const navObserver4 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      articleSectionTab_4.classList.remove("active");
    } else {
      articleSectionTab_4.classList.add("active");
    }
  },
  {
    threshold: 0.3,
  }
);
navObserver4.observe(section_4);

// const section_2 = document.querySelector("#article-1-section-2-text");
// const articleSectionTab_2 = document.querySelector("#article-section-2-tab");

// const observer=new IntersectionObserver((entries)=>{
//     console.log(entries);
//     const entry=entries[0];

// },{});

// observer.observe(section_2);
