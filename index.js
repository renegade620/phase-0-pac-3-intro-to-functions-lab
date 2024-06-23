function shout(string) {
    return string.toUpperCase();
}

console.log("SHOUT")
console.log(shout("aRe"));
console.log(shout("are\n"));

function whisper(string) {
    return string.toLowerCase();
}

console.log("WHISPER")
console.log(whisper("ARE"));
console.log(whisper("aRe\n"));

function logShout(string) {
    console.log(string.toUpperCase());
}

console.log("LOG-SHOUT");
logShout("are");
logShout("aRe\n");

function logWhisper(string) {
    console.log(string.toLowerCase());
}

console.log("LOG-WHISPER")
logWhisper("are");
logWhisper("aRe\n");

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!"
    } else {
        return "NOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!";
    }
}

console.log(sayHiToHeadphonedRoommate("are you coming?"));
console.log(sayHiToHeadphonedRoommate("ARE YOU COMING?"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
console.log(sayHiToHeadphonedRoommate("ARE you coming?"));