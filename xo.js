let body=document.querySelector("body");
let input= document.querySelectorAll(".box");
let reset= document.querySelector(".reset");

let turn= "X";
input.forEach((a)=>{a.addEventListener("click",()=>{
    if(turn=="X")
    {    
        a.innerHTML="X";
        turn="O";
        if(input[0].innerHTML=="X"&&input[1].innerHTML=="X"&&input[2].innerHTML=="X"||
            input[3].innerHTML=="X"&&input[4].innerHTML=="X"&&input[5].innerHTML=="X"||
            input[6].innerHTML=="X"&&input[7].innerHTML=="X"&&input[8].innerHTML=="X"||
            input[0].innerHTML=="X"&&input[3].innerHTML=="X"&&input[6].innerHTML=="X"||
            input[1].innerHTML=="X"&&input[4].innerHTML=="X"&&input[7].innerHTML=="X"||
            input[2].innerHTML=="X"&&input[5].innerHTML=="X"&&input[8].innerHTML=="X"||
            input[0].innerHTML=="X"&&input[4].innerHTML=="X"&&input[8].innerHTML=="X"||
            input[2].innerHTML=="X"&&input[4].innerHTML=="X"&&input[6].innerHTML=="X")
               {  alert("X won!!")}
 
    }  
    else if(turn=="O")
    {
        a.innerHTML="O";
        turn="X";
        if(input[0].innerHTML=="O"&&input[1].innerHTML=="O"&&input[2].innerHTML=="O"||
            input[3].innerHTML=="O"&&input[4].innerHTML=="O"&&input[5].innerHTML=="O"||
            input[6].innerHTML=="O"&&input[7].innerHTML=="O"&&input[8].innerHTML=="O"||
            input[0].innerHTML=="O"&&input[3].innerHTML=="O"&&input[6].innerHTML=="O"||
            input[1].innerHTML=="O"&&input[4].innerHTML=="O"&&input[7].innerHTML=="O"||
            input[2].innerHTML=="O"&&input[5].innerHTML=="O"&&input[8].innerHTML=="O"||
            input[0].innerHTML=="O"&&input[4].innerHTML=="O"&&input[8].innerHTML=="O"||
            input[2].innerHTML=="O"&&input[4].innerHTML=="O"&&input[6].innerHTML=="O")
               { alert("O won !!");}
    }

})})
reset.addEventListener("click",()=>{window.location.href="/xo.html"});


