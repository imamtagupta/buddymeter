readline = require('readline-sync');
const log = console.log;
function setup(){
  ip = readline.question('Do you know mamta(y/n)? ')
  if(ip.toLowerCase() == 'y'){
    log('Wohoo! Lets have a quiz about her.')
  }
  else if(ip.toLowerCase() == 'n'){
    log('Ok:< lets just guess what she will be like?')
  }
  else{
    setup()
  }
}

function quiz(score, question, answer){
  ip = readline.question(question)
  if(ip.toLowerCase() == answer){
    log('right!')
    score++;
    log('score : ',score)
  }else{
    log('wrong!')
    log('score : ',score)
  }
  return score
}

input = readline.question("What's your name? ")
log('Hi '+input+', Welcome!')
setup()
score = 0
score = quiz(score, "What's her favourite color(red/black/purple)? ", 'purple')
score = quiz(score, "She is interested in(frontend/ backend/ fullstack)? ", 'fullstack')
score = quiz(score, "Do she wears glasses(y/n)? ", 'y')
log("your're final score is "+score+'/3')