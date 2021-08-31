# ACBR: A C*** BTD6 Randomizer

Welcome to a Bloons Tower Defense 6 game randomizer!

If you haven't figured out where the randomizer is yet, [click here](https://maquarocket.github.io/btd6randomizer/ "whysnakes and maquarocket present ACBR: A C*** BTD6 Randomizer")!

For those who are interested, the changelog can be found [here](./CHANGELOG.md)

**PLEASE NOTE THAT THIS VERSION OF ACBR IS NO LONGER BEING MAINTAINED AS ACBR HAS NOW MOVED TO A NEW HOME. YOU CAN NOW FIND ACBRv2 [here](https://whysnakes.github.io/btd6randomizerv2/ "whysnakes and maquarocket present ACBR: A C*** BTD6 Randomizer")!**

## The Application

![Image of the Bloons Tower Defense 6 Randomizer with generated results for 2 players, a random map, game mode and heroes and 2 towers for each player](./docs/app_screenshot.png?raw=true "App Screenshot")

The left panel of the app, labelled "Options" contains all the randomization choices, while the panel on the right, labelled "results" will contain a set of randomized results once the "generate" button has been pressed.

## How To Use

The first option presented to the user is the **_Number of players_** option. This can be any either 1, 2, 3 or 4.

Next are the 4 main options for the randomizer. They are:
- Map randomizer
- Hero(es) randomizer
- Game mode randomizer
- Tower(s) randomizer

### Map Randomizer

The **_randomize map_** option will randomly select a map from the standard 56 maps in the game.

### Heroes Randomizer

The **_randomize heroes_** option will randomly select 1 hero for each player. The random assignment can repeat heroes for different players. Thus, it is possible for multiple players to get the same hero.

### Game Mode Randomizer

The **_randomize mode_** option will randomly select a game mode to be played.

_Do note that the **sandbox game mode**, regardless of difficulty, is not included in the list of random game modes to be randomly selected._

If the **_randomize towers_** option is selected, then the game mode randomizer will not choose any of the **_X Monkeys Only_** game modes, those being **_Primary Monkeys Only_**, **_Military Monkeys Only_** and **_Magic Monkeys Only_**. This is because currently the tower randomizer randomly chooses towers without considering game mode.

### Towers Randomization

The _randomize towers_ option will randomly select upwards upwards to 4 towers per player. The random selections do not repeat towers. Thus, all players will have different towers altogether.

The number of towers assigned to players can be chosen in the "tower options per player" number input. It can be either 1, 2, 3 or 4 towers per player.

There is another sub-option attached to the tower randomizer, that is the "restrict each player to one tower type" option. When this option is selected, each player will randomly be assigned a class of towers, and then the given number of towers from that class, the classes being primary, military, magic and support. Similar to the non-repetition of towers, the assigned classes do not repeat.



_All information pertaining to the game is as of BTD6 27.1.4229_
