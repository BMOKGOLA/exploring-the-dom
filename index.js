const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector('.fruits');
const fruitinput = document.querySelector('.InputFruit');
const addFruitButton = document.querySelector('.addfruit');

theMessageButton.addEventListener('click', function() {
        myMessage.innerText = inputBox.value;
});

clearMessageButton.addEventListener('click', function() {
    myMessage.innerText = ''
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
    

});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}
 
addFruitButton.addEventListener('click', function(){
    const li = document.createElement('li');
   li.innerText = fruitInput.value;
   fruitList.appendChild(li)
});