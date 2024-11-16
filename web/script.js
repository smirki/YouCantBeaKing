game = {
    kingdom: {
        gold: 0,
        people: {
            farmer: 1
        }
    },
    food: 30,
    population: 100,
    morale: 50,
    health: 80,
    education: 70
};

let broadcast = [];

function clearBroadcastMessage() {
    document.getElementById('gamedata').innerHTML = '';
}

function clearBroadcast() {
    broadcast.length = 0;
}

function broadcastAll() {
    for (var i = 0; i < broadcast.length; i++) {
        document.getElementById('gamedata').innerHTML += broadcast[i];
    }
}

function post(a) {
    broadcast.push(a);
}

function setVars() {
    // set the variables at the top
    document.getElementById('goldAmt').innerHTML = game.kingdom.gold;
    document.getElementById('foodAmt').innerHTML = game.food;
    document.getElementById('popAmt').innerHTML = game.population;
    document.getElementById('moraleInd').innerHTML = game.morale;
    document.getElementById('healthInd').innerHTML = game.health;
    document.getElementById('educLvl').innerHTML = game.education;
}

function setPeople() {
    var farmers = game.kingdom.people.farmer;

    addImages(farmers, 'farmers', '../images/farmer.gif');
}

function updatePeople( num, type) {
    game.kingdom.people[type] += num;
    post("Added " + num.toString() + " " + (type).toString() + ". ");
}

function addImages(number, containerId, imagePath) {
    var container = document.getElementById(containerId);
    container.innerHTML = '';

    for (var i = 0; i < number; i++) {
        var img = document.createElement('img');
        img.src = imagePath; 
        container.appendChild(img);
    }
}



function turn() {
    clearBroadcastMessage();
    setVars();
    setPeople();
    broadcastAll();
    clearBroadcast();
}
