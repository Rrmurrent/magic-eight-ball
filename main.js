
// Empty variable so user can enter in preferred username.
let userName = 'Clarice';
let userQuestion = 'Will this work?';


// userName ? console.log ('Hello' + ' ' + userName + '.') : console.log('Hello');

// // variable userQuestion
// let userQuestion = 'Will this work?';

// console.log(The user asked : ${userQuestion});

userName ? console.log('Hello',(userName))
: console.log('hello!');

console.log((userName) || 'The user', 'asked:', (userQuestion));

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = 'Will yakkity yak happen?';

switch (randomNumber) {
  case 0:
    eightBall = 'It is decidedly so';
    console.log(eightBall);
    break;
    
  case 1:
    eightBall = 'It is doubtful';
    console.log(eightBall);
    break;

      case 2:
    eightBall = 'It is certain';
    console.log(eightBall);
    break;
    
  case 3:
    eightBall = 'Reply hazy try again';
    console.log(eightBall);
    break;

  case 4:
    eightBall = 'My sources say no';
    console.log(eightBall);
    break;
    
  case 5:
    eightBall = 'Signs point to yes';
    console.log(eightBall);
    break;

  case 6:
    eightBall = 'Outlook not so good';
    console.log(eightBall);
    break;
    
  case 7:
    eightBall = 'Do not count on it';
    console.log(eightBall);
    break;

  case 8:
    eightBall = 'In your dreams';
    console.log(eightBall);
    break;
    
}