let gameseq=[];
let userseq=[];

let btns=["yellow", "red" ,"blue" , "green"];

let started = false;
let level=0;


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
         console.log("shuru hogya");
         started=true;

         levelup();
    }
   
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
     },200);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
     },200);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx= Math.floor(Math.random()*3);
    let randcolor= btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(randidx);
    console.log(randbtn);
    console.log(randcolor);
    
    gameflash(randbtn);
}

function checkans(idx){
    //console.log("curr level:" ,level);
   //  let idx= level-1;
    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
           setTimeout(levelup, 1000);
        }
        console.log("same value");
    }else{
        h2.innerHTML= `tera khel khatam.<br> your score is <b> ${level}</b>`;
        //document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundcolor="red";
        },200);
        reset();
    }
}

function btnPress(){
    let btn = this;
    console.log(this);
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}