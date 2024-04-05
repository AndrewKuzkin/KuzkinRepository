function parseMelody(melody) {
    return melody.split(', ').map((item, index) => index % 2 === 0 ? item : parseInt(item));
}

const melodyStr = 'E4, 1000, C4, 750, D4, 250, E4, 1000, A4, 750, G#4, 250, E4, 3000';
const melody = parseMelody(melodyStr);
console.log(melody);
