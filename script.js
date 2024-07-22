let boxes=document.querySelector(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".reset");
let msgcontainer=document.querySelector(".reset");
let msg=document.querySelector(".reset");
let  turn0=true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const disableBox = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner) => {
    msg.innerText=`WINNER IS ${winner}`;
    msg.container.classList.remove("hide");
    disableBox();
}
const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if (pos1!=" " && pos2!=" " && pos3!=" "){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
}   

