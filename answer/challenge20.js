const confirmReentryPlans = (speed, missionData, checks) => {
  // Code here!
  const astroEntries = missionData.astro;
  const bioEntries = missionData.bio;
  const physicsEntries = missionData.physics;
  
  if(speed > checks.maxSpeed || speed < checks.minSpeed) {
    return false;
  }
  
  if(astroEntries.length !== checks.dataEntries.astro || bioEntries.length !== checks.dataEntries.bio ||physicsEntries.length !== checks.dataEntries.physics) {
    
    return false;
  }
  
  return true;
  
}