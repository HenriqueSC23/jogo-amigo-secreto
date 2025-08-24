let friendsList = [];

function addFriends(friend) {
    const input =  document.getElementById("inputAddFriend");

    if (input.value == "") {
        alert("Preencha o campo com o nome de um amigo!")
    } else {
        friend = input.value;
        friendsList.push(friend);

        console.log(friendsList);
        input.value = "";
        
        updateFriendsList();
    }
}

function updateFriendsList() {
    let friendsContainer = document.querySelector('.friends-list');
    friendsContainer.innerHTML = "";

    for (let i = 0; i < friendsList.length; i++) {
        friendsContainer.innerHTML += `
            <button onclick="removeFriend(${i})" class="friend-tag" id="${i}">
                ${friendsList[i]}
                <i class="ph ph-x-circle"></i>
            </button>
        `;
    }
}

function removeFriend(index) {
    friendsList.splice(index, 1); // remove da lista
    updateFriendsList(); // atualiza a lista

    console.log(friendsList);
}

function sortFriends() {
    if (friendsList.length == 0) {
        alert("Adicione amigos na lista para poder sortear!");
    } else {
        let listFriedsLimit = friendsList.length;
        let luckyFriendNumber = parseInt(Math.random() * listFriedsLimit);
        let luckyFriend = friendsList[luckyFriendNumber];
        removeFriend(luckyFriendNumber);

        document.querySelector("h1").innerHTML = `O amigo sorteado foi ${luckyFriend}!`;
        document.querySelector("h2").innerHTML = "Faça o sorteio do próximo amigo.";
    }
}