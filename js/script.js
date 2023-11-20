document.addEventListener('DOMContentLoaded', () => {
    const sumar = document.getElementById("action");
    sumar.addEventListener('click', function(event){
        event.preventDefault();
        suma();
        getData();
    });
});

// Expresiones regulares para evaluar los números
var NnN = /^([0-9]*$)/;
function suma(){
    let num1 = document.getElementById("num1").value; 
    let num2 = document.getElementById("num2").value;
    let response = document.getElementById("respuesta");

    if (!NnN.test(num1) || !NnN.test(num2)){         
        Sweet_Alert(1);
    } else {
        let opt1 = Number(num1);
        let opt2 = Number(num2);
        let sum = opt1 + opt2;
        response.innerText = "  " + sum;
        console.log(sum);
    }
}