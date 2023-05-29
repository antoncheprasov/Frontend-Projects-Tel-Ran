// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.

const users = []

function createUserCard(user) {
    let card = document.createElement("div");
    card.innerHTML = "First Name: " + user.firstName +
                     "Last Name: " + user.lastName +
                     "Age " + user.age;
    return card;
}

function rerender() {
    let userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = ""; 

    for (let i = 0; i < users.length; i++) {
        let userCard = createUserCard(users[i]);
        userContainer.appendChild(userCard);
    }
}

document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    
    const user = {
    firstName: firstName,
    lastName: lastName,
    age: age
    }


    console.log("Your Name: " + firstName);
    console.log("Your Last Name: " + lastName);
    console.log("Your Age: " + age);

    users.push(user)
    console.log(users);

    rerender();
    
    document.getElementById("form1").reset()
});

/* function createUserCard(user) {
    let card = document.createElement("div");
    card.innerHTML = "First Name: " + user.firstName +
                     "Last Name: " + user.lastName +
                     "Age " + user.age;


    card.addEventListener("dblclick", function() {
        deleteUser(user.id);
    });

    return card;
}

function deleteUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1);
            break;
        }
    }

    rerender();
}
 */