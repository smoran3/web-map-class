const get_current_datetime = () => {
  // Get the current date and time
  const timeElapsed = Date.now();
  return new Date(timeElapsed).toUTCString();
};

export { get_current_datetime };
