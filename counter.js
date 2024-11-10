/*let counter = 0;

const incrementButton = document.getElementById('increment-btn');
const descreaseButton = document.getElementById('decrement-btn');
const counterValue = document.getElementById('counter-value');
const resetValue = document.getElementById('reset');

incrementButton.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
})

descreaseButton.addEventListener('click', ()=>{
    counter--;
    counterValue.innerHTML = counter;
})

resetValue.addEventListener('click', ()=>{
    counter = 0;
    counterValue.innerHTML = counter;
})*/

//New code
let maleCount = 0;
let femaleCount = 0;
let totalCount = 0;

const maleButton = document.getElementById('male-btn');
const femaleButton = document.getElementById('female-btn');
const decreaseButton = document.getElementById('decrease-btn');
const resetButton = document.getElementById('reset');

const maleDisplay = document.getElementById('maleCount');
const femaleDisplay = document.getElementById('femaleCount');
const totalDisplay = document.getElementById('totalCount');
const centerDisplay = document.getElementById('displayCount');

maleButton.addEventListener('click', () => {
    maleCount++;
    totalCount++;
    maleDisplay.innerHTML = maleCount;
    totalDisplay.innerHTML = totalCount;
    centerDisplay.innerHTML = totalCount;
});

femaleButton.addEventListener('click', () => {
    femaleCount++;
    totalCount++;
    femaleDisplay.innerHTML = femaleCount;
    totalDisplay.innerHTML = totalCount;
    centerDisplay.innerHTML = totalCount;
});

decreaseButton.addEventListener('click', () => {
    if(totalCount > 0) {
        if(maleCount > 0) {
            maleCount--;
            totalCount--;
            maleDisplay.innerHTML = maleCount;
        } else if(femaleCount > 0) {
            femaleCount--;
            totalCount--;
            femaleDisplay.innerHTML = femaleCount;
        }
        totalDisplay.innerHTML = totalCount;
        centerDisplay.innerHTML = totalCount;
    }
});

resetButton.addEventListener('click', () => {
    maleCount = 0;
    femaleCount = 0;
    totalCount = 0;
    maleDisplay.innerHTML = maleCount;
    femaleDisplay.innerHTML = femaleCount;
    totalDisplay.innerHTML = totalCount;
    centerDisplay.innerHTML = totalCount;
});
