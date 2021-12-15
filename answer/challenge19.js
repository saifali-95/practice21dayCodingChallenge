const organizeData = (receivedData) => {
  // Code here!
  let output ={};
  let array;
  
  for(const data of receivedData) {
    if (data.type in output) {
      array = output[data.type]; 
      array.push(data.data);
      console.log(array);
      array = [];
    }
    else {
      output[data.type] = [data.data];
    }
  }
  return output;
}