const switchSpecificToggle = (toggleList, specificToggle) => {
  // Code here!
  for (const toggle of toggleList) {
    if(toggle.name === specificToggle) {
      if(!toggle.isOn) {
        toggle.isOn = true;
        return toggleList;
      }
    }
  }
  return toggleList;
}