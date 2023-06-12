// document.onclick = function (event) {
//     console.log(event.target.tagName);
// }

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
list.addEventListener('click', function (evt) { if (evt.target.tagName === 'P') { evt.target.classList.add('del'); } })
