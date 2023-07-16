let quizContainor=document.getElementById("quizContainor");
// let btn = document.getElementById("btn");

let que= document.getElementById("que")
let opt1= document.getElementById("opt1")
let opt2= document.getElementById("opt2")
let opt3= document.getElementById("opt3")
let opt4= document.getElementById("opt4")
let mybtn = document.getElementById("btn")
   

let quiz =[que1={
    que: "what is html",
    opt1: "css",
    opt2: "Js",
    opt3: "Bootsrap",
    opt4: "html",
    ans: "html"
},
que2={
    que: "what is css",
    opt1: "css",
    opt2: "Js",
    opt3: "Bootsrap",
    opt4: "html",
    ans: "css"
}
,
que3={
    que: "what is Js",
    opt1: "css",
    opt2: "Js",
    opt3: "Bootsrap",
    opt4: "html",
    ans: "Js"
}

]

let score=0;

let play=()=>{

console.log(quiz[score].ans)

 que.innerText = quiz[score].que
 opt1.innerText= quiz[score].opt1
 opt2.innerText= quiz[score].opt2
 opt3.innerText= quiz[score].opt3
 opt4.innerText= quiz[score].opt4
 mybtn.disabled = true
}
play()

let btn=()=>{

   score++
  play(score)
}
let marks =0;
let check= (ans)=>{

    mybtn.disabled = false
    if(ans.innerText ===  quiz[score].ans){
        marks +=0
        marks++
        
    }
    console.log(marks)
   
}




// console.log(`${quiz[num].ans}`)