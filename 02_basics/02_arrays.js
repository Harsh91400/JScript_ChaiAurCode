const marvel_heros = ["Thor","Iron Man","Captain America","Spider Man","Hulk"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// // We want to get Flash

// console.log(marvel_heros[5][1]);



// const hero = marvel_heros.concat(dc_heros)
// console.log(hero);



const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6,[7,8,9,[0,1,2,3,4,5,[6,7,8,9]]]]]
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


console.log(Array.isArray("Harsh"))
console.log(Array.from("Harsh"))
console.log(Array.from({name: "harsh"})) // intresting decleare by ChaiAurCode


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));