let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#resetb");
let newbtn=document.querySelector("#newbtn");
let declaration=document.querySelector(".declaration");
let msg=document.querySelector("#msg");

let turno=true;
let count=0;

const ptrn=[
[0,1,2],[0,3,6],
[0,4,8],[1,4,7],[2,5,8],
[2,4,6],[3,4,5],[6,7,8],
];

const resetgame=()=>{
    turno=true;
    count=0;
    enableBoxes();
    declaration.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
          if(turno){
            box.innerText="O";
            turno=false;
          } 
          else{
            box.innerText="X";
            turno=true;
          }
          box.disabled=true;
          count++;

         let isWinner= checkwin();

         if (count === 9 && !isWinner) {
           gameDraw();
          }
        });
}); 

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    declaration.classList.remove("hide");
    disableboxes();
  };

const disableboxes=()=>{
for(let box of boxes){
    box.disabled=true;
 }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
     }
    };
const winner=(winner)=>{
    msg.innerText=`congratulations, player ${winner} is winner`;
    declaration.classList.remove("hide");
    disableboxes();
}
 
function checkwin(){
    for(let pattern of ptrn){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
  
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
           winner(pos1val);
            return true;
        }
    }
 }
}
newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);
