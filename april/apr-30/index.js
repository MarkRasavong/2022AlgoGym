//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
// la mia soluzione
String.prototype.camelCase = function () {
  return this.split(' ').map(parola => parola.charAt(0).toUpperCase() + parola.substring(1)).join('')
};

// altri soluzioni 
String.prototype.camelCase1 = function () {
  return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}

String.prototype.camelCase2 = function () {
  return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}