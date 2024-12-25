const addItemButton = document.querySelector('#addItemButton');
const itemInput = document.querySelector('#itemInput');
const shoppingList = document.querySelector('#shoppingList');

addItemButton.addEventListener('click', function() {
    const itemText = itemInput.value.trim();
    if (!itemText) return alert('Please enter an item!');

    const li = document.createElement('li');
    li.textContent = itemText;

    li.addEventListener('click', function() {
        li.classList.toggle('purchased');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        shoppingList.removeChild(li);
    });

    li.appendChild(deleteButton);
    shoppingList.appendChild(li);
    itemInput.value = '';
    deleteButton.style.width= "130px"
});