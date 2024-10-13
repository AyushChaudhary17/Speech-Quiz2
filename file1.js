
const statement=document.querySelector(".statement");
const options= document.querySelectorAll(".options button");
const explanation=document.querySelector(".explanation");
const questions=[
{
"statement": "JavaScript was invented in 1995",
"answer": "true",
"explanation": "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days."
},
{
"statement": "Strings in JS are editable values",
"answer": "false",
"explanation": "In JavaScript strings are immutable values, meaning they cannot be edited; however, they can replaced with new, different strings."
},
{
"statement": "1 + 1 === 2",
"answer": "true",
"explanation": "The plus operator gives the sum of two numbers."
},
{
"statement": "'1' + '1' === '2'",
"answer": "false",
"explanation": "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'."
},
{
"statement": "typeof ['J', 'S'] === 'array'",
"answer": "false",
"explanation": "Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties.  "
}
];
const next=document.querySelector(".next");
// ======================Utility Functions=====================
const disable=(option)=>{
    option.setAttribute("disabled","");
};

const enable=(option)=>{
    option.removeAttribute("disabled");
}

const scoreChanger=(out,total)=>{
    document.querySelector(".outof").textContent=out;
    document.querySelector(".total").textContent=total;
}


// -------------------- StatementChanger Function-------------

const statementChanger=(n)=>{
    statement.textContent=questions[n].statement;
}

// ==================================
let score=0;
let i=0;
// let k=1;
let count=0;
statementChanger(i);
disable(next);
explanation.classList.add("hidden");
next.addEventListener("click",()=>{
    
    if(i<questions.length-1){
        if(i>=0){
            i=i+1;
            
            statementChanger(i);
            explanation.classList.add("hidden");
            // explanation.classList.add("hidden");
        }
        console.log(i);
        for(let option of options){
            option.classList.remove("correct");
            option.classList.remove("incorrect");
            enable(option);
            disable(next);
        }
        
    }else if(i===questions.length-1){
        next.textContent="All questions are covered";
        disable(next);
        if(score>3){
            window.alert(`Congratulations your score is ${score}/${count}.`);
        }
    }
    disable(next);
    // disable(next);
});
    for(let option of options){

        option.addEventListener("click",()=>{
            if(option.textContent===questions[i].answer.toString()){
                option.classList.add("correct");
                explanation.classList.remove("hidden");
                explanation.textContent=questions[i].explanation;
                count=i+1;
                score=score+1;
            }else{
                option.classList.add("incorrect");
                explanation.classList.remove("hidden");
                explanation.textContent="wrong answer";
                count=i+1;
            }
            for(let option of options){ 
                disable(option);
            }
            scoreChanger(score,count);
            enable(next);
            // explanation.classList.add("hidden");
        });
    }
   
    









