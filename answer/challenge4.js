const switchToggle = (toggle) => {
  // Code here!

  // Remember to return a value!
  if(toggle.isOn === false) {
    toggle.isOn = true;
    return toggle;
  } else {
    toggle.isOn = false
    return toggle;
  }
}