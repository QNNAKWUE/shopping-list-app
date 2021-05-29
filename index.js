const form = [];

const item = document.getElementById('item');
const quantity = document.getElementById('quantity');
const description = document.getElementById('description');
const addBtn = document.getElementById('add-btn');
const listItems = document.getElementById('list-items');

function deleteLiElement(e){
    const parentElement = e.target.parentElement;
    listItems.removeChild(parentElement);
    const parentElementId = parseInt(parentElement.id);
    listItems.splice(parentElementId, 1);
    updateForm();
}

function updateForm(){
    //set the ul elements(listItems) to an empty string
    listItems.innerHTML = "";
    //loop through the form array
    for(var i = 0; i < form.length; ++i){
        //create an li element using the .createElement
        const liElement = document.createElement('li');
        //Pass the value of the loop to the liElement
        liElement.innerText = form[i];
        liElement.id = i;
        //append the liElement to the listItems(ul)
        listItems.appendChild(liElement);

        //pass the item, quantity and description.value field to an emtpy string
        item.value = "";
        quantity.value = "";
        description.value = "";

        const liButton = document.createElement('button');
        liButton.innerText = "delete";
        liButton.addEventListener('click', deleteLiElement);
        liElement.appendChild(liButton);
 
    }
}

function addItemsHandler(){
    form.push(item.value);
    form.push(quantity.value);
    form.push(description.value);
    updateForm();
}

addBtn.addEventListener("click", addItemsHandler)