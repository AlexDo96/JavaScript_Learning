// Toán tử ++ --
// Prefix & Postfix

var a = 6;

// Việc 1: +1 cho a, a = a + 1 => a = 7 
// Việc 2: Trả về a sau khi được + 1
console.log(++a);

var b = 7;

// Việc 1: `b copy`, `b copy` = 7
// Việc 2: Cộng 1 cho b, b = b + 1 => b = 8
// Việc 3: Trả về `b copy` 
console.log(b++);

/* Toán tử gán

Toán tử         VD          Tương đương
=            x = y =        x = y 
+=           x += y         x = x + y 
-=           x -= y         x = x - y
*=           x *= y         x = x * y
/=           x /= y         x = x / y
**=          x **= y        x = x ** y

*/

/* 
Toán tử chuỗi - String operator
*/

var firstName = 'Do';
var lastName = 'Anh';

console.log(firstName + ' ' + lastName);

/* 
Toán tử so sánh - Compare operator
==            
!=           
>
<
>=
<= 

===
!==

*/

var a = 1;
var b = '1';

console.log(a === b); // => false

/* Toán tử logic 
1. && - And
2. || - Or
3. ! - Not
*/






