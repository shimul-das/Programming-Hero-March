
// const third=second;
// if(third===second){
//     console.log("they are same");
// }
// else{
//     console.log("they are not same");
// }
//array and object er khetre same loacation e data na hole tara dekte same holeo different show korbe..
//we do not use this method.

const first={a:2,b:2,d:3};
const second={a:2,b:2,c:3}
const first1={a:2,c:2,b:2};
const second2={a:2,b:2,c:3}
const firstString1=JSON.stringify(first1);
const secondString1=JSON.stringify(second2);
// console.log(firstString,secondString);
// if(firstString===secondString){
//     console.log('same');
// }
// else{
//     console.log('different');
// }
 
//thsis method do not work when posistion changed.

function compare(first,second){
    const firstKeys=Object.keys(first);
    const secondKeys=Object.keys(second);
    if(firstKeys.length==secondKeys.length){
        for(const key of firstKeys){
            console.log(key);
            if(first[key] === second[key]){
                return false
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame=compare(first,second);
console.log(isSame);