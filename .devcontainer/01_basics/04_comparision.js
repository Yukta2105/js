// console.log(2 > 1);
// console.log(2 >= 1); // here in this case, there is OR operation between '>' and '=' hence true 
// console.log(2 <= 1); // here in both cases it is false and hence false 
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0.
//That’s why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);

//undefined becomes NaN (so all comparisons are false), while null becomes 0 in comparisons but is only equal to undefined in ==.

//===
console.log("2" === 2); // the '===' tries to check whether the data types are same and comparable or not as in this it's clear that one is string and the other one is numeric and thus the output came is false here








