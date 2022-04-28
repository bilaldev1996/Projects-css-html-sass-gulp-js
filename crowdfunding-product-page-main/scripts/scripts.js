window.addEventListener('load',()=>{
    /* Codigo para mostrar MODAL */
    if(document.getElementById("selectReward")){
        console.log('bien');
        var modal = document.getElementById("myModal");
        var buttons = document.querySelectorAll(".selectReward");
        var span = document.getElementsByClassName("close")[0];
        var body = document.getElementsByTagName("body")[0];

        buttons.forEach(btn => {
            btn.onclick = function() {
                modal.style.display = "block";
    
                body.style.position = "static";
                body.style.height = "100%";
                body.style.overflow = "hidden";
            }
        })
        span.onclick = function() {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";

                body.style.position = "inherit";
                body.style.height = "auto";
                body.style.overflow = "visible";
            }
        }
    }
})