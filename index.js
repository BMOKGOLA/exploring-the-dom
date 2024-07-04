
document.addEventListener('DOMContentLoaded', function() {
    const myMessage = document.querySelector('.myMessage');
    const theMessageButton = document.querySelector('.theMessageButton');
    const clearMessageButton = document.querySelector('.clearMessageButton');
    const inputBox = document.querySelector('.theInputValue');
    const fruitList = document.querySelector('.fruits');
    const fruitInput = document.querySelector('.inputFruit'); // Corrected class name
    const addFruitButton = document.querySelector('.addFruitButton'); // Corrected class name

    if (theMessageButton) {
        theMessageButton.addEventListener('click', function() {
            myMessage.innerText = inputBox.value;
        });
    }

    if (clearMessageButton) {
        clearMessageButton.addEventListener('click', function() {
            myMessage.innerText = '';
        });
    }

    if (myMessage) {
        myMessage.addEventListener('click', function() {
            myMessage.classList.toggle('darkmode');
        });
    }

    const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
    for (let i = 0; i < fruits.length; i++) {
        // get fruits from the list
        const fruit = fruits[i];

        // create a new li element
        const li = document.createElement('li');
        li.innerText = fruit;
        fruitList.appendChild(li);
    }

    if (addFruitButton) {
        addFruitButton.addEventListener('click', function() {
            const fruit = fruitInput.value;
            if (fruit) {
                const li = document.createElement('li');
                li.innerText = fruit;
                fruitList.appendChild(li);
                fruitInput.value = ''; // Clear the input box after adding
            }
        });
    }
});
