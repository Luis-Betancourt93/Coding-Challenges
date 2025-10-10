/*
Filter out any link where the text is "Terms of Service" OR "Privacy Policy".

Map to just the href.


*/
const links = [
  { text: "Home", href: "/home" },
  { text: "Shop", href: "/shop" },
  { text: "Terms of Service", href: "/tos" },
  { text: "Privacy Policy", href: "/privacy" },
  { text: "Contact", href: "/contact" }
];

const filterText = links.filter(element => element.text !== 'Terms of Service' && element.text !== 'Privacy Policy').map(element => 
  element.href
)

console.log(filterText);