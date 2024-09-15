
    
        function changeMode() {
            var button = document.getElementById("btn");
            var body = document.querySelector("body");

            if (body.style.backgroundColor === "black") {
            
                body.style.backgroundColor = "white";
                body.style.color = "black";
                button.style.backgroundColor = "black";
                button.style.color = "white";
                button.textContent = "night";
            } else {
        
                body.style.backgroundColor = "black";
                body.style.color = "white";
                button.style.backgroundColor = "white";
                button.style.color = "black";
                button.textContent = "day";
            }
        }
   
