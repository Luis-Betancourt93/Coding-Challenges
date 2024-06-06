/*
  Write a function that given an input URL, returns its domain name.
*/



const domainName = url => {
  return url.replace(/(www\.|.*\/\/|\..+)/g, '');
};