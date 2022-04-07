
// ==SCROLL=CHANGE=IN=THIS=ARTICLE=STYLING==SECTION_1==///////////////
const section_1 = document.querySelector("#article-1-section-1-content-box");
const contentsLink_1 = document.querySelector("#table-contents-link-1");
const articleSectionTab_1 = document.querySelector("#article-section-1-tab");

const navObserver = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
        contentsLink_1.classList.remove("active");
      articleSectionTab_1.classList.remove("active");
      
    } else {
        contentsLink_1.classList.add("active");
      articleSectionTab_1.classList.add("active");
      
    }
  },
  {
    threshold: 0.3,
  }
);
navObserver.observe(section_1);

// ==SCROLL=CHANGE=IN=THIS=ARTICLE=STYLING==SECTION_2==///////////////
const section_2 = document.querySelector("#article-1-section-2-content-box");
const contentsLink_2 = document.querySelector("#table-contents-link-2");
const articleSectionTab_2 = document.querySelector("#article-section-2-tab");

const navObserver2 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
        contentsLink_2.classList.remove("active");
      articleSectionTab_2.classList.remove("active");
    } else {
        contentsLink_2.classList.add("active");
      articleSectionTab_2.classList.add("active");
    }
  },
  {
    threshold: 0.3,
  }
);
navObserver2.observe(section_2);

// ==SCROLL=CHANGE=IN=THIS=ARTICLE=STYLING==SECTION_3==///////////////
const section_3 = document.querySelector("#article-1-section-3-content-box");
const contentsLink_3 = document.querySelector("#table-contents-link-3");
const articleSectionTab_3 = document.querySelector("#article-section-3-tab");

const navObserver3 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
        contentsLink_3.classList.remove("active");
      articleSectionTab_3.classList.remove("active");
    } else {
        contentsLink_3.classList.add("active");
      articleSectionTab_3.classList.add("active");
    }
  },
  {
    threshold: 0.3,
  }
);
navObserver3.observe(section_3);

// ==SCROLL=CHANGE=IN=THIS=ARTICLE=STYLING==SECTION_3==///////////////
const section_4 = document.querySelector("#article-1-section-4-content-box");
const contentsLink_4 = document.querySelector("#table-contents-link-4");
const articleSectionTab_4 = document.querySelector("#article-section-4-tab");

const navObserver4 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
        contentsLink_4.classList.remove("active");
      articleSectionTab_4.classList.remove("active");
    } else {
        contentsLink_4.classList.add("active");
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


// ==FUN=WITH=ROCKET=TEXT=BOX==///////////////////

const sectionImg = document.querySelector(".article-section-img");
const rocketChat = document.querySelector("#rocket-chat-icon")

const navObserver5 = new IntersectionObserver((entries, observer)=>{
    const entry = entries[0];
    if (!entry.isIntersecting){
        rocketChat.classList.remove("active");
    }else{
        rocketChat.classList.add("active");
    }
},{
      threshold: .3,
}
);
navObserver5.observe(sectionImg);