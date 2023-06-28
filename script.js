const addButton = document.getElementById('add-btn');
const deleteButton = document.getElementsByClassName('delete');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');
const li = document.querySelector('li');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    let delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete';
    delBtn.classList.add('delete');
    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value = '';
    addEventListenerToButton(); // adds listener to all buttons with class of 'delete'
}

function addListItemOnClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListItemOnKeypress(e) {
    if (inputLength() > 0 &&  e.key === 'Enter') {
        createListElement();
    }
}

function deleteParent(e) {
    e.target.parentElement.remove();
}

function addEventListenerToButton() {
    for (i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', deleteParent)
    }
}
addEventListenerToButton();

addButton.addEventListener('click', addListItemOnClick);

input.addEventListener('keypress', addListItemOnKeypress);

ul.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName == 'LI') {
        e.target.classList.toggle('done');
    }
})





// let database = [
//     {
//         username: "tyler",
//         password: "supersecret"
//     },
//     {
//         username: "will",
//         password: "superlative"
//     },
//     {
//         username: "bobby",
//         password: "asia123"
//     }
// ];

// let newsFeed = [
//     {
//         username: "Bobby",
//         timeline: "So tired from all that learning!"
//     },
//     {
//         username: "Sally",
//         timeline: "lalalaa"
//     }
// ];

// function isUserValid(username, password) {
//     for (let i = 0; i < database.length; i++) {
//         if (database[i].username === username &&
//             database[i].password === password) {
//                 return true;
//         }
//     }
//     return false;
// }

// function signIn(user, pass) {
//     if (isUserValid(user, pass)) {
//         console.log(newsFeed);
//     } else {
//         alert('wrong username or pass')
//     }
// }

// let usernamePrompt = prompt("What's your username?");
// let pwPrompt = prompt("What's your password?");


// signIn(usernamePrompt, pwPrompt);