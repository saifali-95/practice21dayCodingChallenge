const parseTranscripts = (message) => {
  // Code here!
    const outputArray = [];
  
  for (const item of message){
    outputArray.push(`${item.origin}: ${item.message}`)  
  }
  
  return outputArray;
}
