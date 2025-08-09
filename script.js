let inputName = document.querySelector('.inputName');
let inputPhone = document.querySelector('.inputPhone');
let contacts = document.querySelector('.contacts');
let addContact = document.querySelector('.addContact');

function addUser() {
    if (inputName.value.trim() === '' || inputPhone.value.trim() === '') {
        alert('Вы не ввели данные');
        return;
    }

    let user = document.createElement('li');
    user.classList.add('user');

    user.innerHTML = `
    <div class="number">
        <span class="userName">${inputName.value}</span>
        <span class="userPhone">${inputPhone.value}</span>
    </div>
    <div class="liButtons">
        <button class="change">✏️</button>
        <button class="delete">🗑</button>
    </div>
    `;

    user.querySelector('.delete').addEventListener('click', () => {
        user.remove();
    });

    user.querySelector('.change').addEventListener('click', () => {
        let newName = prompt('new name:', user.querySelector('.userName').textContent);
        let newPhone = prompt('new phone:', user.querySelector('.userPhone').textContent);
        if (newName) user.querySelector('.userName').textContent = newName;
        if (newPhone) user.querySelector('.userPhone').textContent = newPhone;
    });

    contacts.appendChild(user);

    inputName.value = '';
    inputPhone.value = '';
}
    
addContact.addEventListener('click', addUser);
