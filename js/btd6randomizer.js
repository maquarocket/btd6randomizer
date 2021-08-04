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
        for(var key in btd6_towers) {
            for(var tower in btd6_towers[towerType]) {
                towerArray.push(btd6_towers[key][tower]);
            }
        }
    }
    for(let i = 0; i < noOfTowers; i++) {
        let towerInt = getRandomInt(0, towerArray.length - 1);
        randomTowers.push(towerArray[towerInt]);
        towerArray.splice(towerInt,1);
    }
    return randomTowers;
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
    
    
    for(i = 0; i < 4; i++) {
        $("#player_" + (i + 1)).addClass("d-none");
        $("#player_" + (i + 1) + "_hero").addClass("d-none");
        $("#player_" + (i + 1) + "_hero").empty();
        for(j = 0; j < 4; j++) {
            $("#player_" + (i + 1) + "_tower_" + (j + 1)).addClass("d-none");
            $("#player_" + (i + 1) + "_tower_" + (j + 1)).empty();
        }
    }
    //Output map first
    if(useRandomMap) {
        $("#random_map").removeClass("d-none");
        $("#random_map_result").append("Map: " + getRandomMap());
    }
    //Then the mode
    if(useRandomMode) {
        $("#random_mode").removeClass("d-none");
        $("#random_mode_result").append("Mode: " + getRandomMode());
    }
    //Finally each player's options (hero and towers)
    if(useRandomHero || useRandomTowers)
    {
        if(useRandomTowers) {
            let playerTowers = [];
            if(restrictTowerType) {
                let modes = ["primary","military","magic","support"];
                for(var i = 0; i < playerCount; i++) {
                    let modeIndex = getRandomInt(0,3);
                    playerTowerType = modes[modeIndex];
                    let randomTowersByType = getRandomTowers(maxTowers,playerTowerType);
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
                $("#player_" + (i + 1)).removeClass("d-none");
                if(useRandomHero)
                {
                    $("#player_" + (i + 1) + "_hero").removeClass("d-none");
                    $("#player_" + (i + 1) + "_hero").append("Hero: " + getRandomHero());
                }
                if(useRandomTowers)
                {
                    for(var j = 0; j < maxTowers; j++) {
                        $("#player_" + (i + 1) + "_tower_" + (j + 1)).removeClass("d-none");
                        $("#player_" + (i + 1) + "_tower_" + (j + 1)).append("Tower " + (j + 1) + ": " + playerTowers[i*maxTowers + j]);
                    }
                }
            }
        }
    }
};

function toggleTowerOptions() {
    console.log("Randomize towers clicked")
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
});