
function Sweet_Alert(type) {
    switch(type) {
        case 1:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar un dato'
              })
        break;
    }
}
async function getData(){
    await fetch("https://api.github.com/users/hadley/orgs")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error())
}

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "clear") {
            display.innerHTML = "";
        } else if(item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerHTML = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equals") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equals" ) {
            Sweet_Alert(1);
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});
const themeToogleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector("toggle-icon");
let idDark = true;
themeToogleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToogleBtn.classList.toggle("active");
}