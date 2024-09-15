
    
        function changeMode() {
            var button = document.getElementById("btn");
            var button1 = document.getElementById("btn1");
            var body = document.querySelector("body");

            if (body.style.backgroundColor === "black") {
            
                body.style.backgroundColor = "white";
                body.style.color = "black";
                button.style.backgroundColor = "black";
                button1.style.backgroundColor = "black";
                button.style.color = "white";
                button1.style.color = "white";
                button.textContent = "night";
                button1.textContent = "Light Mode";
            } else {
        
                body.style.backgroundColor = "black";
                body.style.color = "white";
                button.style.backgroundColor = "white";
                button1.style.backgroundColor = "white";
                button.style.color = "black";
                button1.style.color = "black";
                button.textContent = "day";
                button1.textContent = "Dark Mode";
            }
        }
   
