let num=0
function print_number(){
    console.log(num++);
    if(num==10){
        clearInterval(id)   
     }
}
const id=setInterval(print_number,3000)