// window.addEventListener('DOMContentLoaded', () => {
    
//     console.log("boleh tak?")
// });

window.addEventListener('load', function() {
    console.log("Window loaded");
    const iya = document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items");
    const ini = document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items > :nth-child(1)");
    const hamburger = document.querySelector("#masthead > #container > #start > #guide-button")
    const hamburg = document.querySelector("#masthead")

    if(hamburg && hamburg.hasAttribute("guide-persistent-and-visible")){
        console.log("side panel awak terbuka")
        hamburg.addEventListener("contextmenu", (e)=> {
            e.preventDefault();
            console.log("hello")
        })
    }else if(hamburg){
        console.log("side panel anda tidak terbuka")
    }
    else{

        this.alert("Kami gagal untuk menyambung dengan youtube, sila refresh. ")
    }

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