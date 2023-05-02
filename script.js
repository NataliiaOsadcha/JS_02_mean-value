// const firstValue = +(prompt('Please enter your first discount'));
// const secondValue = +(prompt('Please enter your second discount'));
// const thirdValue = +(prompt('Please enter your third discount'));

// const result = (firstValue + secondValue + thirdValue) / 3;

// alert(`Your final discount is: (${firstValue} + ${secondValue} + ${thirdValue}) / 3 = ${result}`);



const firstDisc = (prompt('Please enter your first discount'));
const firstValue = +firstDisc;
if (isNaN(firstValue)) {
  alert('Not a number!!');
} else {
  alert(firstValue)
}
const secondDisc = (prompt('Please enter your second discount'));
const secondValue = +secondDisc;
if (isNaN(secondValue)) {
  alert('Not a number!!');
} else {
  alert(secondValue)
}
const thirdDisc = (prompt('Please enter your third discount'));
const thirdValue = +thirdDisc;
if (isNaN(thirdValue)) {
  alert('Not a number!!');
} else {
  alert(thirdValue)
}


const result = (firstValue + secondValue + thirdValue) / 3;

alert(`Your final discount is: (${firstValue} + ${secondValue} + ${thirdValue}) / 3 = ${result}`);