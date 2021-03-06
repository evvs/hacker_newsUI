export default (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();

  return humanDateFormat;
};
