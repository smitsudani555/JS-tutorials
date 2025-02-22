## for project url
[click me](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

## solution 1

## project 1

```javaScript
    console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```

## project 2
```javascript 
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
})


```

## project 3
```javascript

const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()

  clock.innerHTML = date.toLocaleTimeString();

},1000)

```

## project 4
```javascript

let random_int = parseInt(Math.random() * 100 +1)

const submit = document.querySelector('#subt')
const user_input = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuss = 1;

let playGame = true

const p = document.createElement('p');

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(user_input.value);
    validateguest(guess)
  })
}

function validateguest(guess){
  if(isNaN(guess)){
    alert("Please Enter a valid number")
  }
  else if(guess > 100){
    alert("Please enter a valid number")
  }
  else if(guess < 0){
    alert("please enter a valid number")
  }
  else{
    prevGuess.push(guess)

    if(numGuss === 11){
      displayguess(guess)
      displayMessage(`Game over. random num is ${random_int}`)
      endgame();
    }
    else{
      displayguess(guess)
      checkguess(guess)
    }
  }
}

function checkguess(guess){
  if(guess == random_int){
    displayMessage(`you gussed right`)
  } else if (guess < random_int) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > random_int) {
    displayMessage(`Number is TOOO High`);
  }

}

function displayguess(guess){
  user_input.value=''
  guessSlot.innerHTML += `${guess}, `;
  numGuss++;
  remaining.innerHTML = `${11 - numGuss}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;

}

function endgame(){
  user_input.value=''
  user_input.setAttribute('disabled','')
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false
  newgame()
}

function newgame(){
  document.addEventListener('click', function(e){
    if(e.target.id === 'newGame'){  // Ensure the button exists before adding logic
      random_int = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuss = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuss}`;
      user_input.removeAttribute('disabled');

      if (startOver.contains(p)) {  // Prevent error when removing 'p'
        startOver.removeChild(p);
      }

      playGame = true;
    }
  });
}


```

## project 5
```javascript

const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
  insert.innerHTML = `
  <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.key}</td>
    </tr>
    
  </table>
    </div>
  `
})

```

## project 6
```javascript


const randomcolor = function(){
  const hex = '123456789ABCDEF';
  let color = '#'

  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
};

let intervalid;
const startchangingcolor = function(){
  if(!intervalid){
    intervalid = setInterval(changebgcolor,1000)
  }

  function changebgcolor(){
    document.body.style.backgroundColor = randomcolor()
  }
}

const stopchangingcolor = function(){
  clearInterval(intervalid)
  intervalid = null;
}

document.querySelector('#start').addEventListener('click',startchangingcolor);

document.querySelector('#stop').addEventListener('click',stopchangingcolor)

```