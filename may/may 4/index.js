//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
//my solution
const domainName = (url) => (
  url.match
    (/(?<=\.)[\w\d\-]*(?=\.)|(?<=\/\/)[^www.][\w\d\-]*|[\w\d\-]*(?=\.\w{2,3})/ig)
    .filter(link => !link.includes("www")).filter(link => link.length > 1)[0]
);

// clevel solution
function domainName1(url) {
  return url.replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0];
}