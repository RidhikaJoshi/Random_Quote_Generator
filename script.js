let btn= document.getElementById("button")
let q=document.querySelector(".quote")
let s=document.querySelector(".source")
let array;
let size;
fetch(`http://localhost:8000/quotes`)
    .then((response) => response.json())
    .then((data) => {
        array = data;
        size = array.length;
})


btn.onclick = function(){
    let random = Math.floor(Math.random()*size);
    // console.log(random);
    // console.log(array[random].quote);
    // console.log(array[random].source);
    q.innerHTML=array[random].quote;
    s.innerHTML=array[random].source;
};