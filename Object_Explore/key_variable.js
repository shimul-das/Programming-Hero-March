const bottle={
    color:'red',
    price:50,
    isClean:true,
    capacity:1
}
const key=Object.keys(bottle);
console.log(key);
const values=Object.values(bottle);
console.log(values);
const pair=Object.entries(bottle);
console.log(bottle);
// Object.seal(bottle)
Object.freeze(bottle);
delete bottle.isClean;
console.log(bottle);
//seal means we can not remove any property but we can change exsisting property
bottle.price=1000;
console.log(bottle)
//freeze means we can not change and delete from object.