//taken from MDN
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Fisher-Yates algorithm shuffle function taken from SO
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

function getRandomMap() {
    let mapIndex = getRandomInt(0,btd6_maps.length);
    return btd6_maps[mapIndex];
};

function getRandomHero() {
    let heroIndex = getRandomInt(0,btd6_heroes.length);
    return btd6_heroes[heroIndex];
};

function getRandomMode(isTowerTypeRestricted) {
    let modeArray = [];
    for(var i = 0; i < btd6_modes.length; i++) {
        if (!isTowerTypeRestricted || !btd6_only_modes.includes(i)) {
            modeArray.push(btd6_modes[i]);
        }
    }
    let modeIndex = getRandomInt(0,modeArray.length);
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
            towerArray.push(btd6_towers[towerType][tower]);
        }
    }
    for(let i = 0; i < noOfTowers; i++) {
        let towerInt = getRandomInt(0, towerArray.length);
        randomTowers.push(towerArray[towerInt]);
        towerArray.splice(towerInt,1);
    }
    return randomTowers;
}

function togglePlayerCards(showPlayers) {
    if(showPlayers) {
        let playerCount = parseInt($("#playercount").val());
        for(i = 0; i < playerCount; i++) {
            $("#player_" + (i + 1)).removeClass("d-none");
        }
    }
    else {
        for(i = 0; i < 4; i++) {
            $("#player_" + (i + 1)).addClass("d-none");
            $("#player_" + (i + 1) + "_hero").addClass("d-none");
            $("#player_" + (i + 1) + "_hero").empty();
            for(j = 0; j < 4; j++) {
                $("#player_" + (i + 1) + "_tower_" + (j + 1)).addClass("d-none");
                $("#player_" + (i + 1) + "_tower_" + (j + 1)).empty();
            }
        }
    }
}

function showRandomHeroes() {
    let playerCount = parseInt($("#playercount").val());
    let useRandomHero = $("#randomize_heroes").is(":checked");
    for(i = 0; i < playerCount; i++) {
        if(useRandomHero)
        {
            $("#player_" + (i + 1) + "_hero").removeClass("d-none");
            $("#player_" + (i + 1) + "_hero").append("Hero: " + getRandomHero());
        }
    }
}
function generateRandomOptions() {
    let playerCount = parseInt($("#playercount").val());
    let useRandomMap = $("#randomize_map").is(":checked");
    let useRandomHero = $("#randomize_heroes").is(":checked");
    let useRandomMode = $("#randomize_mode").is(":checked");
    let useRandomTowers= $("#randomize_towers").is(":checked");
    let restrictTowerType = $("#restrict_tower_type").is(":checked");
    let maxTowers = $("#max_towers").val();

    if(!useRandomMap && !useRandomHero && !useRandomMode && !useRandomTowers){
        alert("Please pick a random option");
    }

    //Clear previous results first
    $("#random_map").addClass("d-none");
    $("#random_map_result").empty();
    $("#random_mode").addClass("d-none");
    $("#random_mode_result").empty();
    
    //Hide player cards
    togglePlayerCards(false);
    
    //Output map first
    if(useRandomMap) {
        $("#random_map").removeClass("d-none");
        $("#random_map_result").append(getRandomMap());
    }
    //Then the mode
    if(useRandomMode) {
        $("#random_mode").removeClass("d-none");
        $("#random_mode_result").append(getRandomMode(useRandomTowers));
    }
    // Randomize heroes.
    if (useRandomHero) {
        togglePlayerCards(true);
        showRandomHeroes();
    }
    // Finally, randomize towers.
    if(useRandomTowers) {
        togglePlayerCards(true);  // Redundant extra call does not cause problems.
        let playerTowers = [];
        if(restrictTowerType) {
            let modes = ["primary","military","magic","support"];
            let playerTowerTypes = shuffle(modes);
            for(var i = 0; i < playerCount; i++) {
                let randomTowersByType = getRandomTowers(maxTowers,playerTowerTypes[i]);
                for(var j = 0; j < randomTowersByType.length; j++) {
                    playerTowers.push(randomTowersByType[j]);
                }
            }
        }
        else {
            playerTowers = getRandomTowers(maxTowers * playerCount);
        }
        
        for(var i = 0; i < playerCount; i++)
        {
            for(var j = 0; j < maxTowers; j++) {
                $("#player_" + (i + 1) + "_tower_" + (j + 1)).removeClass("d-none");
                $("#player_" + (i + 1) + "_tower_" + (j + 1)).append("Tower " + (j + 1) + ": " + playerTowers[i*maxTowers + j]);
            }
        }
    }
};

function toggleTowerOptions() {
    if($("#randomize_towers").is(":checked")) {
        $("#restrict_tower_type").prop("disabled",false);
        $("#max_towers").prop("disabled",false);
    }
    else{
        $("#restrict_tower_type").prop("disabled",true);
        $("#max_towers").prop("disabled",true);
    }
};

$(document).ready(function() {
    $("#randomize_towers").click(function() {
        toggleTowerOptions();
    });

    //Add version numbers for both BTD6 and the randomizer
    $("#pagefooter").html(
        "Version <strong>" + randomizer_version+ "</strong> for Bloons Tower Defense 6 version <strong>" + btd6_version + "</strong>"
    );
});