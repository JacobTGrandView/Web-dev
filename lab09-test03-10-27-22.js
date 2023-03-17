//document.addEventListener("DOMContentLoaded", function () {
    //const panels = document.querySelectorAll(".panels .panel");
    //for(let panel of panels) {
        //panel.addEventListener("click", function () {
            //panel.classList.toggle("open");
        //})
    //}
//})

document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelector(".panels");
    panels.addEventListener("click", function(e){
            if(e.target.nodeName == "DIV") {
               e.target.classList.toggle('open');
            } else {
                e.target.parentNode.classList.toggle('open')
            }
    })
});
