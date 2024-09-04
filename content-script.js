document.addEventListener('DOMContentLoaded', () => {
    
    console.log("boleh tak?")
});

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
hello.addEventListener("mouseover", (e) => {
    document.querySelector("#page-header > yt-page-header-renderer > yt-page-header-view-model > div > div.page-header-view-model-wiz__page-header-headline-info > yt-flexible-actions-view-model > div > div > yt-subscribe-button-view-model > yt-animated-action > div.animated-action__content-with-background > div.yt-subscribe-button-view-model-wiz__container > button").style.background = "red";
})

hello.addEventListener("mouseout", (e) => {
    document.querySelector("#page-header > yt-page-header-renderer > yt-page-header-view-model > div > div.page-header-view-model-wiz__page-header-headline-info > yt-flexible-actions-view-model > div > div > yt-subscribe-button-view-model > yt-animated-action > div.animated-action__content-with-background > div.yt-subscribe-button-view-model-wiz__container > button").style.background = "black";
})
const hello = document.querySelector("#page-header > yt-page-header-renderer > yt-page-header-view-model > div > div.page-header-view-model-wiz__page-header-headline-info > yt-flexible-actions-view-model > div > div > yt-subscribe-button-view-model > yt-animated-action > div.animated-action__content-with-background > div.yt-subscribe-button-view-model-wiz__container > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill")




const execute = () => {
    setTimeout(() => { 
        const satu = document.querySelector("#page-header > yt-page-header-renderer > yt-page-header-view-model > div > div.page-header-view-model-wiz__page-header-headline-info > yt-flexible-actions-view-model > div > div > yt-subscribe-button-view-model > yt-animated-action > div.animated-action__content-with-background > div.yt-subscribe-button-view-model-wiz__container > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click()
        setTimeout(() => { 
            const dua = document.querySelector("#contentWrapper > yt-sheet-view-model > yt-contextual-sheet-layout > div.yt-contextual-sheet-layout-wiz__content-container > yt-list-view-model > yt-list-item-view-model:nth-child(4) > div").click()

            setTimeout(() => { 
                const tiga = document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click()

            },2000)
        },2000)
    },2000)
}
