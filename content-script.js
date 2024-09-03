window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#endpoint > tp-yt-paper-item > yt-formatted-string").style.color = "red"
    document.querySelector("#endpoint > tp-yt-paper-item > yt-formatted-string").addEventListener("contextmenu", function(e){
        e.preventDefault();
        console.log("hello")
    })
});

// document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items > :nth-child(1)")


// document.querySelector("#content > #guide #contentContainer > #guide-wrapper > #guide-content > #guide-inner-content > #guide-renderer > #sections > ytd-guide-section-renderer:nth-child(2) > #items > :nth-child(1)").addEventListener("contextmenu", function(e){
//     e.preventDefault();
//     console.log("hello")
// })