// window.addEventListener('DOMContentLoaded', () => {
    
//     console.log("boleh tak?")
// });

window.addEventListener('load', function() {
    console.log("Window loaded");
    const iya = document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items");
    const ini = document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items > :nth-child(1)");
    
    
    
    // ini.addEventListener("contextmenu", (e) => {
    //     e.preventDefault()
    //     console.log("hello")
    // })
    
    if (iya){
        console.log("process cantuman bermula")
        const element = iya.querySelectorAll("ytd-guide-entry-renderer")
        element.forEach(elem => {
            elem.classList.add("tambah")
        })

        console.log("pencantuman skrip berjaya")
        console.log(element)
    }else{
        console.log("gagal untuk dicantumkan skrip")
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