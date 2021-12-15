const chooseLunchWinner = (listOfChoices) => {
  //Code here!
  let counter1 = 0;
  let counter2 = 0;
  let foodChoice1 = "";
  let foodChoice2 = "";
  
  for (const lunch of listOfChoices) {
    if(listOfChoices[0] === lunch){
      foodChoice1 = listOfChoices[0];
      counter1 += 1;
    }
    else {
      foodChoice2 = lunch;
      counter2 += 1;
    }
  }
  
  if (counter1 > counter2) {
    return foodChoice1;
  }
  else {
    return foodChoice2;
  }
}