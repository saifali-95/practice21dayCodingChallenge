const switchAllTogglesOn = (toggleList) => {
  // Code here!
  for (const toggle of toggleList) {
    if(!toggle.isOn) {
      toggle.isOn = true;
    }
  }
  return toggleList;
}