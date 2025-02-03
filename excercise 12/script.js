
function random_color(){
    val1=Math.floor(Math.random()*250);
    val2=Math.floor(Math.random()*250);
    val3=Math.floor(Math.random()*250);

    return `rgb(${val1}, ${val2}, ${val3})`;
}

const boxes= document.getElementsByClassName("box")
Array.from(boxes).forEach(e=> {
    e.style.backgroundColor= random_color();
    e.style.color= random_color();
    console.log(e);
})
// for(i=0; i<boxes.length; i++){
//     boxes[i].style.backgroundColor= colors[ran_num];
//     boxes[i].style.color= colors[ran_num2];
// }


