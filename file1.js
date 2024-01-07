const Questions=[
    {
        "Q":"",
        "A":""
    },
    {
        "Q":"",
        "A":""
    },
    {
        "Q":"",
        "A":""
    },
    {
        "Q":"",
        "A":""
    },
    {
        "Q":"",
        "A":""
    }
];
// ..................... Selecting all the stuff ...................
let statement=document.querySelector(".statement");
let mic=document.querySelector(".mic");
let answer=document.querySelector(".answer");
let next = document.querySelector(".next");
const check=document.querySelector(".check");

let i=0;
mic.addEventListener("click",()=>{

});

next.addEventListener("click",()=>{
    i=i+1;
    if(i<Questions.length){

        statement.textContent   =   Questions[i].Q;
        next.classList.add("hide");
    }
})

check.addEventListener("click",()=>{
    next.removeAttribute(".hide");
    next.classList.add("show");
})
