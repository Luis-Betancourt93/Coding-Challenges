// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

// Code to Keep Practicing 





































function parsesURL(webSite) {
  const site = webSite.replace('http://', '').replace('https://', '').replace('www.', '').split('.')
  console.log(site[0])
  
  }
  
  // Always start with HTTP
  // Yes always a string
  // no numbers
  // no empty string
  
  
  // console.log the result 
  parsesURL("http://github.com/carbonfive/raygun") // == "github" 
  parsesURL("http://www.zombie-bites.com") // == "zombie-bites"
  parsesURL("https://www.cnet.com") // == "cnet"
  