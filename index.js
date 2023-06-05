let toDoInput = document.querySelector('input');
const toDoList = document.querySelector('.list');
function makeList() {
    toDoList.textContent = toDoInput.value;

}

document.querySelector('.btn').addEventListener('click', makeList);