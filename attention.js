const time_at = document.querySelector('.watch .time');

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log("Time Changed: " + mutation.target.textContent);
    var yeniIcerik = mutation.target.textContent;
  });
});

observer.observe(time_at, { childList: true, subtree: true });

window.onload = function() {

    var pageTitle = document.title;
    var blinkEvent = null;
  
    document.addEventListener('visibilitychange', function(e) {
      var isPageActive = !document.hidden;
  
      if(!isPageActive){
        blink();
      }else {
        document.title = pageTitle;
        clearInterval(blinkEvent);
      }
    });
  
    function blink(){
      blinkEvent = setInterval(function() {
        if(document.title === time_at.textContent){
          document.title = pageTitle;
        }else {
          document.title = time_at.textContent;
        }
      }, 100);
    }
};
