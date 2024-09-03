window.addEventListener('DOMContentLoaded', () => {
    
    console.log("boleh tak?")
});

window.addEventListener('load', function() {
    console.log("Window loaded");
    const ini = document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items > :nth-child(1)")
    // Your code here
    
    const iya =document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items")
    const berapa = iya.querySelectorAll("ytd-guide-entry-renderer").length

    ini.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        console.log("hello")
    })

    console.log(ini)
    console.log("total subscription awak adalah " + ( berapa - 1 ) + " orang." )
});

console.log("bolehke?")
// document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items > :nth-child(1)").addEventListener("contextmenu", function(e){
//         e.preventDefault();
//         console.log("hello")
//     })



// document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items > :nth-child(1)")


// document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items > :nth-child(1)").addEventListener("contextmenu", function(e){
//     e.preventDefault();
//     console.log("hello")
// })