const numbers=[25,30,55,60,27];
// for(const number of numbers){
//     console.log(number);
// }
//for of we can not use in objects.
const bottle={
    color:'red',
    price:50,
    isClean:true,
    capacity:1
}

// for(const key of bottle){
//     console.log(key);
// }
const keys=Object.keys(bottle);
console.log(keys);

for (const key of keys ){
    console.log(key +':'+ bottle[key]);
}
//3 way read object properties
// 1. bottle.color=> . notation 
// 2. bottle['color']
// 3. bottle[key]=> bracket notation

//for in loop
//object loop throw korar jonno in loop use kora hoi.
for(const key in bottle){
    console.log(key,bottle[key]);
}

//advance system

const pair=Object.entries(bottle);
console.log(pair);

for(const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}
