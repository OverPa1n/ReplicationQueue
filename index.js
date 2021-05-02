//Our elements
const list = document.querySelector('.frame_list');
const form = document.querySelector('.controls_form');
const addButton = document.querySelector('.controls_form-addBtn');
const removeButton = document.querySelector('.controls_form-removeBtn');
const input = document.querySelector('.controls_form-input');
//---------------------------------------------------------------------------------

//Main Functionality
checkLocalStorage();


//This function create an element and "add" it to our list
const addElement = () => {

    if (input.value !== '' && input.value !== undefined) {
        const listElement = document.createElement('li');
        listElement.innerHTML = input.value;
        listElement.classList.add('list_item');
        list.append(listElement);
        addToLocalStorage(list.innerHTML);
    } else {
        alert('Please enter at least 1 character');
    }
    checkElementsInList();

}
//This function delete an element from our list of items and from localStorage
const removeElement = () => {
    if (list.childElementCount !== 0) {
        list.firstElementChild.remove();
        localStorage.removeItem('key');
    } else {
        alert('nothing to delete');
    }
}
//This function add item to localStorage when button has been clicked
const addToLocalStorage = (value) => localStorage.setItem('elements', value);

//This function check if localStorage has element inside it. If has then value add to list element
function checkLocalStorage() {
    if (localStorage.getItem('elements')) list.innerHTML = localStorage.getItem('elements');
}
//This function check amount of items(li) in list(ul)
function checkElementsInList() {
    if (list.childElementCount === 23) {
        alert(`You have reached the limit of your stack of ${list.childElementCount} items`);
        list.innerHTML = '';
        localStorage.clear();
    }
}

//This event has been created for prevent standard behaviour of form element
form.addEventListener('submit', (e) => {
    e.preventDefault();
    input.value = '';
});

removeButton.addEventListener('click', removeElement);
addButton.addEventListener('click', addElement);


