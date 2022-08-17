var elSiteheaderToggleBtn = document.querySelector(".header-wrap__btn");
var elHeader = document.querySelector(".site-header");
var elBody = document.querySelector(".site-body");

elSiteheaderToggleBtn.addEventListener("click",function(){
    elHeader.classList.toggle("site-header--open");
    elBody.classList.toggle("body--active");
})
