const bookFreePlatform = (platformList, missionDate) => {
  // Code here!
  for (const item of platformList) {
    if(!item.bookDate) {
      item.bookDate = missionDate;
      return platformList;
    }
  }
  
  return platformList;
}
