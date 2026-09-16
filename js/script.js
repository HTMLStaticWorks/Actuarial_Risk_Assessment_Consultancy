/* =========================================================
PAGE ROUTING
========================================================= */

document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

/* =========================================================
THEME
========================================================= */
const themeButton = document.getElementById("themeButton");
const themeButtonMobile = document.getElementById("themeButtonMobile");
const themeIcon = document.getElementById("themeIcon");
const themeIconMobile = document.getElementById("themeIconMobile");
function setTheme(theme){
if(theme==="dark"){
document.documentElement
.classList
.add("dark");
const darkSVG = `
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="1.8">
<circle
cx="12"
cy="12"
r="4">
</circle>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="M4.93 4.93l1.42 1.42"></path>
<path d="M17.65 17.65l1.42 1.42"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
</svg>
`;
if(themeIcon) themeIcon.innerHTML = darkSVG;
if(themeIconMobile) themeIconMobile.innerHTML = darkSVG;
}else{
document.documentElement
.classList
.remove("dark");
const lightSVG = `
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="1.8">
<path
d="M21 12.8A8.5 8.5 0 1 1 11.2 3
6.8 6.8 0 0 0 21 12.8Z">
</path>
</svg>
`;
if(themeIcon) themeIcon.innerHTML = lightSVG;
if(themeIconMobile) themeIconMobile.innerHTML = lightSVG;
}
localStorage.setItem(
"risk-theme",
theme
);
}
setTheme(
localStorage.getItem(
"risk-theme"
)||"light"
);
const toggleTheme = function(){
const isDark =
document.documentElement
.classList
.contains("dark");
setTheme(
isDark
?"light"
:"dark"
);
};
if(themeButton) themeButton.addEventListener("click", toggleTheme);
if(themeButtonMobile) themeButtonMobile.addEventListener("click", toggleTheme);
/* =========================================================
RTL / LTR
========================================================= */
const directionButton = document.getElementById("directionButton");
const directionButtonMobile = document.getElementById("directionButtonMobile");
const directionIcon = document.getElementById("directionIcon");
const directionIconMobile = document.getElementById("directionIconMobile");
function setDirection(direction){
document.documentElement.dir =
direction;
const dirSVG = `
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="1.8">
<path d="M7 7h10"></path>
<path d="M14 4l3 3-3 3"></path>
<path d="M17 17H7"></path>
<path d="M10 14l-3 3 3 3"></path>
</svg>
`;
if(directionIcon) directionIcon.innerHTML = dirSVG;
if(directionIconMobile) directionIconMobile.innerHTML = dirSVG;
localStorage.setItem(
"risk-direction",
direction
);
}
setDirection(
localStorage.getItem(
"risk-direction"
)||"ltr"
);
const toggleDirection = function(){
const current =
document.documentElement.dir;
setDirection(
current==="rtl"
?"ltr"
:"rtl"
);
};
if(directionButton) directionButton.addEventListener("click", toggleDirection);
if(directionButtonMobile) directionButtonMobile.addEventListener("click", toggleDirection);
/* =========================================================
MOBILE MENU
========================================================= */
const mobileToggle =
document.getElementById(
"mobileToggle"
);
const mobileMenu =
document.getElementById(
"mobileMenu"
);
mobileToggle.addEventListener(
"click",
function(){
const opened =
mobileMenu
.classList
.toggle("open");
mobileToggle
.setAttribute(
"aria-expanded",
opened
);
if(opened){
mobileToggle.innerHTML=`
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2">
<path d="M6 6l12 12"></path>
<path d="M18 6L6 18"></path>
</svg>
`;
}else{
mobileToggle.innerHTML=`
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2">
<path d="M4 7h16"></path>
<path d="M4 12h16"></path>
<path d="M4 17h16"></path>
</svg>
`;
}
}
);
/* =========================================================
FAQ
========================================================= */
document
.querySelectorAll(".faq-question")
.forEach(button => {
button.addEventListener(
"click",
function(){
const item =
this.closest(".faq-item");
const answer =
item.querySelector(".faq-answer");
const wasOpen =
item.classList
.contains("open");
document
.querySelectorAll(".faq-item")
.forEach(other => {
other.classList
.remove("open");
const otherAnswer =
other.querySelector(".faq-answer");
if(otherAnswer){
otherAnswer.style.maxHeight =
null;
}
});
if(!wasOpen){
item.classList
.add("open");
answer.style.maxHeight =
answer.scrollHeight+"px";
}
}
);
});
/* =========================================================
CONTACT FORM
========================================================= */
const contactForm =
document.getElementById(
"contactForm"
);
if(contactForm){
contactForm.addEventListener(
"submit",
function(event){
event.preventDefault();
let valid=true;
const name =
document.getElementById("name");
const company =
document.getElementById("company");
const email =
document.getElementById("email");
const phone =
document.getElementById("phone");
const service =
document.getElementById("service");
const message =
document.getElementById("message");
const fields=[
{
input:name,
valid:name.value.trim().length>=2
},
{
input:company,
valid:company.value.trim().length>=2
},
{
input:email,
valid:/^[^\s@]+@[^\s@]+\.[^\s@]+$/
.test(email.value.trim())
},
{
input:phone,
valid:phone.value
.replace(/\D/g,"")
.length>=8
},
{
input:service,
valid:service.value.trim()!==""
},
{
input:message,
valid:message.value.trim().length>=10
}
];
fields.forEach(item => {
const error =
item.input
.closest(".field")
.querySelector(".error");
if(item.valid){
error.style.display="none";
item.input
.removeAttribute(
"aria-invalid"
);
}else{
error.style.display="block";
item.input
.setAttribute(
"aria-invalid",
"true"
);
valid=false;
}
});
if(valid){
const success =
document.getElementById(
"success"
);
success.style.display="block";
contactForm.reset();
setTimeout(
function(){
success.style.display="none";
},
7000
);
}
}
);
}
/* =========================================================
BACK TO TOP
========================================================= */
const backTop =
document.getElementById(
"backTop"
);
window.addEventListener(
"scroll",
function(){
if(window.scrollY>400){
backTop.classList
.add("show");
}else{
backTop.classList
.remove("show");
}
},
{
passive:true
}
);
backTop.addEventListener(
"click",
function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}
);
/* =========================================================
IMAGE ERROR HANDLING
========================================================= */
document
.querySelectorAll("img")
.forEach(image => {
image.addEventListener(
"error",
function(){
this.style.display="none";
const parent =
this.parentElement;
if(parent){
parent.style.background=
"linear-gradient(135deg,#082a38,#061923)";
}
}
);
});
/* =========================================================
FAQ RESIZE
========================================================= */
window.addEventListener(
"resize",
function(){
document
.querySelectorAll(
".faq-item.open .faq-answer"
)
.forEach(answer => {
answer.style.maxHeight =
answer.scrollHeight+"px";
});
});