
function RandomNumber(min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return result;
}

const nRandomArray = [];

const arrayUser = [];

let numsDiscovered = '';

let i = 0;
let j = 0;
let numDiscovered = 0;

const boxDiv = document.querySelector('.numbers');

while (nRandomArray.length < 5) {
    let element = document.createElement('div');
    let num = RandomNumber(1, 1000);
    if (!nRandomArray.includes(num)) {
        nRandomArray[i] = num;
        element.innerText = num;
        boxDiv.append(element);
        console.log(nRandomArray[i]);
        i++;
    }
}

function discorverNumbers() {
    for (let i = 0; i < 5; i++) {
        const getnNumber = parseInt(prompt("Inserisci i numeri"));
        arrayUser[i] = getnNumber;
        if (nRandomArray.includes(getnNumber)) {
            numsDiscovered += '    ' + getnNumber.toString();
            numDiscovered++;
        }
    }
    alert(`Numeri scoperti: ${numDiscovered} => ${numsDiscovered} !`);
}



setTimeout(function () {
    boxDiv.style.display = 'none';
    setTimeout(function () {
        discorverNumbers();
    }, 1000);
}, 3000);

