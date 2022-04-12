const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// selectors

const navItems = document.querySelectorAll("nav a");
const companyLogo = document.querySelector("#logo-img");
const h1 = document.querySelector("h1");
const ctaButton = document.querySelector(".cta-text button")
const ctaImage = document.querySelector("#cta-img");
// const mainTitles = document.querySelectorAll(".text-content h4");
const mainPs = document.querySelectorAll(".text-content p");
const mainImage = document.querySelector("#middle-img")
const contactTitle = document.querySelector(".contact h4");
const contactLines = document.querySelectorAll(".contact p")
const copyright = document.querySelector("footer a");

const topContent = document.querySelector(".top-content")
const botContent = document.querySelector(".bottom-content")

// work

const navText = Object.values(siteContent.nav)
// console.log(navText);

navItems.forEach((link, index) =>{
  link.textContent = navText[index]
  link.classList.add('italic')
});

h1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];



botContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
botContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];
botContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
botContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];
botContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
botContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];


companyLogo.src = siteContent.images["logo-img"]

ctaImage.src = siteContent.images["cta-img"]

mainImage.src = siteContent.images["accent-img"]

contactTitle.textContent = siteContent.contact["contact-h4"];
const contact = document.querySelector('section.contact')
contact.querySelector('p:nth-of-type(1)').textContent = siteContent.contact["address"]
contact.querySelector('p:nth-of-type(2)').textContent = siteContent.contact["phone"]
contact.querySelector('p:nth-of-type(3)').textContent = siteContent.contact["email"]

// footer 

copyright.textContent = siteContent.footer.copyright;
copyright.classList.add("bold");