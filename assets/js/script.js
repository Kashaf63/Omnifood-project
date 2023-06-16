let yearEL = document.querySelector(".year")
console.log(yearEL)
let currentYear = new Date ().getFullYear()
yearEL.textContent = currentYear

// const btnNavEl = document.querySelector(".btn-mobile-nav")
// const headerEl = document.querySelector(".header")

// btnNavEl.addEventListener("click" , function () {
//     headerEl.classList.toggle('nav-open')
// })

//////////////////////////////////////////////////////
// function checkFlexGap(){
//     var flex = document.createElement("div")
//     flex.style.display="flex"
//     flex.style.flexDirection = "column"
//     flex.style.rowGap = "1px"

//     flex.appendChild(document.createElement("div"))
//     flex.appendChild(document.createElement("div"))

//     document.body.appendChild(flex)
//     var isSupported = flex.scrollHeight === 1
//     flex.parentNode.removeChild(flex)
//     console.log(isSupported)

//     if(!isSupported) document.body.classList.add("no-flexbox-gap")
// }
// checkFlexGap()

///////////////////////////////////////////////////////////



window.onload = function() {
    window.addEventListener("scroll" , function(e) {
        if (window.pageYOffset > 100){
            document.querySelector("header").classList.add("is-scrolling")
        } else {
            document.querySelector("header").classList.remove("is-scrolling")
        } 
    })
    const menu_btn = document.querySelector(".hamburger")
    const mobile_nav = document.querySelector('.mobile-nav')

    menu_btn.addEventListener("click" , function(){
        menu_btn.classList.toggle("is-active")
        mobile_nav.classList.toggle("is-active")
    })
}



const header = document.querySelector(".header")
const section_hero = document.querySelector(".section-hero")
const observer = new IntersectionObserver(
    (entries)=>{
        const ent = entries[0];
        console.log(ent);
        ent.isIntersecting === false 
        ? header.classList.add("sticky") 
        : header.classList.remove("sticky")
    } , {
    root:null,
    rootMargin:"-80px",
    threshold:0,
})









