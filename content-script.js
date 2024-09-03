window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#endpoint > tp-yt-paper-item > yt-formatted-string").style.color = "red"
    document.querySelector("#endpoint > tp-yt-paper-item > yt-formatted-string").addEventListener("contextmenu", function(e){
        e.preventDefault();
        console.log("hello")
    })
});
  