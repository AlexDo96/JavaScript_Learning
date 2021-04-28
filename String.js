var firstName = 'Do';
var lastName = 'Anh';
var fullName = 'Anh Do';

console.log(`Toi la: ${firstName} ${lastName}`);

//1. Length
console.log(fullName.length);

//2. Find index
console.log(fullName.indexOf('Do'));

//3. Cut string
console.log(fullName.slice(4, 6));

//4. Replace
console.log(fullName.replace('JS', 'Javascript'));

//5. Convert to uppercase
console.log(fullName.toUpperCase());

//6. Convert to lowercase
console.log(fullName.toLowerCase());

//7. Trim
console.log(fullName.trim().length);

//8. Split
var languages = 'PHP, JS, Ruby';

console.log(languages.split(','));

//9. Get a character by index
const myString = 'Anh Do ne';

console.log(myString.charAt(5));