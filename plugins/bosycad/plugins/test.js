function keyPress(key) {
    console.log("key: " + key);
}

function onMouseMove(mp) {
    drawText(mp, "M");
}

export function load(filename) {
    console.log("Trying to load plugin!");
    return {keyPress: keyPress, onMouseMove: onMouseMove};
}
