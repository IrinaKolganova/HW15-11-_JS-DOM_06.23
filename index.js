const input = document.querySelector('input');
const list = document.querySelector('.list');
const btn = document.querySelector('.btn');
btn.addEventListener('click', makeList);
function makeList() {
    const p = document.createElement('p');
    p.textContent = input.value;
    list.appendChild(p);
    input.value = '';
}
