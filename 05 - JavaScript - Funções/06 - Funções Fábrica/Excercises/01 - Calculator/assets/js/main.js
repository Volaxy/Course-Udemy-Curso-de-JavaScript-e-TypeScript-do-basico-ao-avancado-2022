function createCalculator() {
    return {
        display: document.querySelector(".display"),
        clear: document.querySelector(".clear-button"),
        
        starts() {
            this.buttonsClick();
            this.pressEnter();
        },

        // Add event of click in the buttons
        buttonsClick() {
            // When using an "Arrow function", the value of "this" will not change
            document.addEventListener("click", e => {
                const element = e.target;

                if(element.classList.contains("num-button")) {
                    this.btnToDisplay(element.innerText);
                }

                if(element.classList.contains("clear-button")) {
                    this.clearDisplay();
                }
                
                if(element.classList.contains("del-button")) {
                    this.delOne();
                }

                if(element.classList.contains("eq-button")) {
                    this.makeCalculation();
                }
            });
        },

        // Show the characters in the display
        btnToDisplay(value) {
            this.display.value += value;
        },

        // Clear the display
        clearDisplay() {
            this.display.value = "";
        },

        // Delete an value
        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        // Make a calc
        makeCalculation() {
            let calculation = this.display.value;

            try {
                calculation = eval(calculation);

                if(!calculation) {
                    alert("Invalid calculation");
                    return;
                }

                this.display.value = calculation;
            } catch(e) {
                alert("Invalid calculation");
                return;
            }
        },

        // Detect if the user press Enter in the display
        pressEnter() {
            this.display.addEventListener("keyup", e => {
                if(e.keyCode === 13) {
                    this.makeCalculation();
                }
            });
        }
    };
}

const calculator = createCalculator();

calculator.starts();