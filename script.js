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
