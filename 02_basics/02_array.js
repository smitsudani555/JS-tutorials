const marvel_hero = ["Thor","captain","tony"]
const dc_hero = ["superman","aquaman","wonder_women"]

// marvel_hero.push(dc_hero)

// console.log(marvel_hero);
// console.log(marvel_hero[3][2]);

const all_hero = marvel_hero.concat(dc_hero)
console.log(all_hero);

const all_n_hero = [...marvel_hero,...dc_hero]
console.log(all_n_hero);


const another_array = [1,2,3,4,[3,[5,6,8],7,8],6,5,4]
const flat_another_array = another_array.flat(Infinity)
console.log(flat_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));