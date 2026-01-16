let score = JSON.parse(localStorage.getItem('scores')) || {
  wins: 0,
  losses: 0
}
// console.log(JSON.parse(localStorage.getItem('scores')));

function guessMode(guessResult) {
  const result = flippingCoin();
  // console.log(result);
  let outCome = "";

  if (guessResult === 'heads') {
    if (result === 'heads') {
      outCome = 'you win';
    } else if (result === 'tails') {
      outCome = 'you lose';
    }
  } else if (guessResult === 'tails') {
    if (result === 'heads') {
      outCome = 'you lose';
    } else if (result === 'tails') {
      outCome = 'you win';
    }
  }

  localStorage.setItem('scores', JSON.stringify(score));

  if (outCome === 'you win') {
    score.wins += 1;
  } else if (outCome === 'you lose') {
    score.losses += 1;
  }

  alert(`your guess was ${guessResult}. The flipping result was ${result}. the outcome is ${outCome}.
wins: ${score.wins}, losses: ${score.losses}`)
}


function flippingCoin() {
  let coinFlip = Math.random();
  // console.log(coinFlip);
  let result = "";

  if (coinFlip >= 0 && coinFlip < 0.5) {
    // console.log("heads");
    result = "heads";
  } else if (coinFlip >= 0.5 && coinFlip < 1) {
    // console.log("tails")
    result = "tails";
  }

  return result;
}

