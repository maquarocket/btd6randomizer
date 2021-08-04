//taken from MDN
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomMap() {
    let mapIndex = getRandomInt(0,btd6_maps.length - 1);
    return btd6_maps[mapIndex];
};

function getRandomHero() {
    let heroIndex = getRandomInt(0,btd6_heroes.length - 1);
    return btd6_heroes[heroIndex];
};

function getRandomMode(isTowerTypeRestricted) {
    let modeArray = [];
    for(var i = 0; i < btd6_modes.length; i++) {
        if(!isTowerTypeRestricted || !btd6_only_modes.includes(i))
        {
            modeArray.push(btd6_modes[i]);
        }
    }

    let modeIndex = getRandomInt(0,modeArray.length - 1);
    return modeArray[modeIndex];
};

function getRandomTowers(noOfTowers, towerType) {
    let towerArray = [];
    let randomTowers = [];
    if(!towerType) {
        for(var key in btd6_towers) {
            for(var tower in btd6_towers[key]) {
                towerArray.push(btd6_towers[key][tower]);
            }
        }
    }
    else {
        for(var tower in btd6_towers[towerType]) {
            towerArray.push(btd6_towers[key][tower]);
        }
    }
    for(let i = 0; i < noOfTowers; i++) {
        let towerInt = getRandomInt(0, towerArray.length - 1);
        randomTowers.push(towerArray[towerInt]);
        towerArray.splice(towerInt,1);
    }
    return randomTowers;
}