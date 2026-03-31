const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = true;

console.log("You wake up on the edge of a dark forest during a stormy evening.");
console.log("In front of you are two paths: one leads to the mountains and the other to a village.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You use your torch to safely begin climbing the mountain path.");
  
  const mountainChoice = readline.question("At the top, do you enter the 'cave' or follow the 'bridge'? ");

  if (mountainChoice === "cave") {
    if (hasSword && hasTorch) {
      console.log("Inside the cave, a wild creature appears, but with your sword and torch, you scare it away and find hidden treasure.");
    } else if (hasTorch && !hasSword) {
      console.log("You can see inside the cave, but without a sword you decide the risk is too high and leave safely.");
    } else {
      console.log("The cave is too dark and dangerous, so you turn back.");
    }
  } else if (mountainChoice === "bridge") {
    if (hasCompass || hasMap) {
      console.log("Using your sense of direction, you cross the bridge and discover a scenic overlook with a safe trail home.");
    } else {
      console.log("You cross the bridge but lose your bearings and have to camp overnight.");
    }
  } else {
    console.log("Unable to decide, you head back down the mountain.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to safely enter the mountains, so you turn back.");

} else if (choice === "village" || hasMap) {
  console.log("You make your way toward the village.");
  
  const villageChoice = readline.question("In the village, do you visit the 'market' or the 'inn'? ");

  if (villageChoice === "market") {
    if (hasCompass && hasSword) {
      console.log("At the market, a traveler notices your gear and offers you a paid job as an adventurer.");
    } else if (hasCompass || hasMap) {
      console.log("At the market, you trade directions with a merchant and learn about a safer road for future travels.");
    } else {
      console.log("You browse the market, but without useful gear you do not attract much attention.");
    }
  } else if (villageChoice === "inn") {
    const talkToStranger = readline.question("A stranger offers you a quest. Do you say 'yes' or 'no'? ");

    if (talkToStranger === "yes" && (hasSword || hasTorch)) {
      console.log("You accept the quest and prepare for a new adventure at sunrise.");
    } else if (talkToStranger === "yes" && !hasSword && !hasTorch) {
      console.log("You accept the quest, but the innkeeper warns you to gather supplies first.");
    } else {
      console.log("You enjoy a quiet evening at the inn and decide to rest instead.");
    }
  } else {
    console.log("You wander through the village square and enjoy the peaceful atmosphere.");
  }

} else {
  console.log("You get lost in the forest and wander aimlessly until morning.");
}
