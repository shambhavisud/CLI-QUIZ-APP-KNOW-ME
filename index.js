let readlinesync = require('readline-sync');

let userName = readlinesync.question("Type your Name: ");
let score =0;

console.log("Hi! "+userName+" lets see how well you know Shambhavi!");
 

let checkAnswer = (question,answer) =>{
  let userAnswer = readlinesync.question(question).toUpperCase();
  if(userAnswer==answer){
    console.log("Right! ");
    score+=1;
    console.log("score: "+score);
  }else{
    console.log("Wrong! ");
    score-=1;
    console.log("score: "+score);
  }
  console.log("--------------");
}

questions = [{question: "Where do i live? ", 
              answer: "BANGALORE"},
{question: "What is her favourite anime-series? ", 
 answer: "NARUTO"},
 {question: "Name of her college? ", 
 answer: "SHIV NADAR UNIVERSITY"}


]

for(let i=0;i<questions.length;i++){
  checkAnswer(questions[i].question,questions[i].answer);
}

console.log(" Thanks for playing, your FINAL SCORE: "+score);