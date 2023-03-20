function scuberGreetingForFeet(value){
  let response;
  if (value <= 400) {
    response = 'This one is on me!';
  
  } else if (value > 400 && value < 2000) {
      response = 'That will be twenty bucks.';

  } else if (value > 2000 && value < 2500) {
    response = 'I will gladly take your thirty bucks.';

  } else if (value > 2500) {
    response = 'No can do.';
  }

  
  return response;
}

function ternaryCheckCity(place){
  let cityreply;
  const city = 'NYC';
  if (place === city) {

   cityreply = 'Ok, sounds good.';
  
} else if (place != city) {
  cityreply = 'No go.';

}

  return cityreply;
}

function switchOnCharmFromTip(amount){
  let charmresponse
  if (amount === 'generous') {
    charmresponse = 'Thank you so much.';

  } else if (amount === 'not as generous') {
    charmresponse = 'Thank you.';

  } else {
    charmresponse = 'Bye.';
  }

  return charmresponse;
}