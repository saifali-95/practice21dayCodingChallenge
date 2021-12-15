const listAstronautJobs = (roster) => {
  // Code here!
  const allJob = [];
  for (const item of roster) {
    allJob.push(item.job);
  }
  return allJob;
}