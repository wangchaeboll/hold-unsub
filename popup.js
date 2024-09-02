document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const button = document.getElementById("start")
      
      let saltul = false;
      if (currentTab && currentTab.url.includes('youtube.com')) {
        // The tab is on YouTube
        console.log("you are on youtube tabs")
        button.addEventListener("click", showRules)  
      } else {
        // The tab is not on YouTube
        console.log("you are not on a youtube tab")

        // display none
        document.getElementsByClassName("container")[0].style.display = "none"

        document.documentElement.style.height = "35px";

        const takde = document.createElement("div")
        const texttt = `<i>This is not a youtube tab</i>`

        takde.className = "style"
        takde.innerHTML = texttt

        document.body.appendChild(takde)
      }

      function showRules() {
        saltul = !saltul
        if (saltul){
            document.getElementsByClassName("step")[0].style.display = "none";
            document.getElementsByClassName("hilang")[0].style.display = "block";
            button.innerText = "Back"
            button

        }else{
            document.getElementsByClassName("step")[0].style.display = "block";
            document.getElementsByClassName("hilang")[0].style.display = "none";
            button.innerText = "More"
            
        }
    }
    });

});
