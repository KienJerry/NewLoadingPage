const SECTION_AZCARE = "section-azcare";
const SECTION_BANNER = "section-banner";
const SECTION_MESSAGE = "section-message";
const IMAGE_PARTNER = "image-loyalty-partner";
const PLUGIN_PLATFORM = "box-plugin-platform";
const DIFFERENCE_CATEGORY = "parent-difference-category";
const CHARACTER_BENIFIT = "box-character-benifit";
const TAKECARE_CONTENT = "parent-takecare-content";
const CARD_OFFER = "box-card-offer";
const TITLE_PEN = "parent-title-pen";
const LIST_DATA = [
  PLUGIN_PLATFORM,
  IMAGE_PARTNER,
  CHARACTER_BENIFIT,
  TAKECARE_CONTENT,
  CARD_OFFER,
  TITLE_PEN,
  DIFFERENCE_CATEGORY,
];

var itemMenu = document.getElementById("itemMenu");

const loadSectionId = (id, element, dataType) => {
  document.getElementById(id).classList.add("active");
  element.removeAttribute(dataType);
};
const loadSectionQuery = (element, dataType) => {
  element.classList.add("active");
  element.removeAttribute(dataType);
};
const loadSectionQueryEachItems = (className, element, dataType) => {
  const eachItems = document.getElementsByClassName(className);
  for (let i = 0; i < eachItems.length; i++) {
    setTimeout(() => {
      eachItems[i].classList.add("active");
    }, i * 200);
  }
  element.removeAttribute(dataType);
};
const loadSectionItems = (item) => {
  let section = document.querySelectorAll(`[${item}]`);
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadSectionQueryEachItems(item, entry.target, item);
      }
    });
  });
  section.forEach((element) => {
    observer.observe(element);
  });
};
const loadSectionData = () => {
  for (let i = 0; i < LIST_DATA.length; i++) {
    loadSectionItems(LIST_DATA[i]);
  }
};
const loadSectionMessage = () => {
  let section = document.querySelectorAll(`[${SECTION_MESSAGE}]`);
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadSectionId("group-message-content", entry.target, SECTION_MESSAGE);
        loadSectionId("group-message-image", entry.target, SECTION_MESSAGE);
      }
    });
  });
  section.forEach((element) => {
    observer.observe(element);
  });
};
const loadSectionAZcare = () => {
  let section = document.querySelectorAll(`[${SECTION_AZCARE}]`);
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadSectionId("image-case-study", entry.target, SECTION_AZCARE);
        loadSectionId("content-case-study", entry.target, SECTION_AZCARE);
      }
    });
  });
  section.forEach((element) => {
    observer.observe(element);
  });
};
const loadSectionBanner = () => {
  let section = document.querySelectorAll(`[${SECTION_BANNER}]`);
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadSectionId("group-banner-content", entry.target, SECTION_BANNER);
        loadSectionId("panda-loyalty-banner", entry.target, SECTION_BANNER);
      }
    });
  });
  section.forEach((element) => {
    observer.observe(element);
  });
};
const ready = () => {
  if ("IntersectionObserver" in window) {
    loadSectionData();
    loadSectionBanner();
    loadSectionAZcare();
    loadSectionMessage();
  }
};
document.addEventListener("DOMContentLoaded", ready);

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

window.smoothScroll = function (target) {
  var scrollContainer = target;
  do {
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i - itemMenu.offsetHeight;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 20);
  };
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 830 && itemMenu) {
    itemMenu.style.background = "white";
    itemMenu.style.padding = "6px 100px";
    itemMenu.style.maxHeight = "70px";
  } else {
    itemMenu.style.background = "transparent";
  }
});

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach(function (e) {
  e?.addEventListener("click", () => {
    console.log("first")
    smoothScroll(document.getElementById(e?.dataset.redirect));
    menuItems.forEach(function (element) {
      element.classList.remove("active");
    });
    e.classList.add("active");
  });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

// Get the button
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
  ActiveScroll();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(topFunction);
    window.scrollTo(0, c - c / 8);
  }
}

const categoryTakeCare = document.querySelectorAll(".box-category-takecare");

categoryTakeCare.forEach(function (e) {
  e?.addEventListener("click", () => {
    categoryTakeCare.forEach(function (element) {
      element.classList.remove("active");
    });
    e.classList.add("active");
  });
});

const takecare1 = document.getElementById("group-about-takecare");
const takecare2 = document.getElementById("group-about-takecare2");
const takecare3 = document.getElementById("group-about-takecare3");
document.getElementById("boxCategoryTakeCare1").onclick = function () {
  if (takecare1.style.display == "flex") {
    return;
  } else {
    takecare1.style.display = "flex";
    takecare2.style.display = "none";
    takecare3.style.display = "none";
  }
};
document.getElementById("boxCategoryTakeCare2").onclick = function () {
  if (takecare2.style.display == "flex") {
    return;
  } else {
    takecare1.style.display = "none";
    takecare2.style.display = "flex";
    takecare3.style.display = "none";
  }
};
document.getElementById("boxCategoryTakeCare3").onclick = function () {
  if (takecare3.style.display == "flex") {
    return;
  } else {
    takecare1.style.display = "none";
    takecare2.style.display = "none";
    takecare3.style.display = "flex";
  }
};

function ActiveScroll() {
  const panda_loyalty_caseStudy = document.querySelector(
    ".panda-loyalty-caseStudy"
  );
  const panda_loyalty_benifit = document.querySelector(
    ".panda-loyalty-benifit"
  );
  const panda_loyalty_offer = document.querySelector(".panda-loyalty-offer");
  const panda_loyalty_contact = document.querySelector(
    ".panda-loyalty-contact"
  );
  const id_difference = document.getElementById("id-difference");
  const id_caseStudy = document.getElementById("id-caseStudy");
  const id_IDbenefit = document.getElementById("id-IDbenefit");
  const id_IDpriceList = document.getElementById("id-IDpriceList");
  const id_IDcontact = document.getElementById("id-IDcontact");
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop <= panda_loyalty_caseStudy.offsetTop - 100) {
    id_difference.classList.add("active");
    id_caseStudy.classList.remove("active");
    id_IDbenefit.classList.remove("active");
    id_IDpriceList.classList.remove("active");
    id_IDcontact.classList.remove("active");
  } else if (
    scrollTop > panda_loyalty_caseStudy.offsetTop - 100 &&
    scrollTop <= panda_loyalty_benifit.offsetTop - 100
  ) {
    id_caseStudy.classList.add("active");
    id_difference.classList.remove("active");
    id_IDbenefit.classList.remove("active");
    id_IDpriceList.classList.remove("active");
    id_IDcontact.classList.remove("active");
  } else if (
    scrollTop > panda_loyalty_benifit.offsetTop - 100 &&
    scrollTop <= panda_loyalty_offer.offsetTop - 100
  ) {
    id_IDbenefit.classList.add("active");
    id_difference.classList.remove("active");
    id_caseStudy.classList.remove("active");
    id_IDpriceList.classList.remove("active");
    id_IDcontact.classList.remove("active");
  } else if (
    scrollTop > panda_loyalty_offer.offsetTop - 100 &&
    scrollTop <= panda_loyalty_contact.offsetTop - 100
  ) {
    id_IDpriceList.classList.add("active");
    id_difference.classList.remove("active");
    id_caseStudy.classList.remove("active");
    id_IDbenefit.classList.remove("active");
    id_IDcontact.classList.remove("active");
  } else {
    id_IDcontact.classList.add("active");
    id_difference.classList.remove("active");
    id_caseStudy.classList.remove("active");
    id_IDbenefit.classList.remove("active");
    id_IDpriceList.classList.remove("active");
  }
}
