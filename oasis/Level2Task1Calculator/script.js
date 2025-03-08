document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonValue = button.id;
            
            if (buttonValue === "clear") {
                currentInput = "";
            } else if (buttonValue === "backspace") {
                currentInput = currentInput.slice(0, -1);
            } else if (buttonValue === "equal") {
                try {
                    currentInput = eval(currentInput.replace(/\u00D7/g, '*').replace(/\u00F7/g, '/')).toString();
                } catch {
                    currentInput = "Error";
                }
            } else {
                currentInput += button.textContent;
            }
            
            display.textContent = currentInput || "0";
        });
    });

    // Theme toggler functionality
    const themeToggler = document.querySelector(".theme-toggler");
    const calculator = document.querySelector(".calculator");
    
    themeToggler.addEventListener("click", () => {
        calculator.classList.toggle("dark");
        themeToggler.classList.toggle("active");
    });
});
