//Template String or Template Literal

const usn1 = 151;
const univ = 'VTU';

let details = `Studied at ${univ} and USN was ${usn1}`;
console.log(details);

const usn2 = 153;
details = `USN was changed to ${usn2}`;
console.log(details);

//Calculation using template literal
let change = `Change in USN was ${usn2 + usn1} places`;
console.log(change);

function getMarks(sub1, sub2){
    return `Scored total of ${sub1 + sub2}`;
}

console.log(`USN is ${usn2} and ${getMarks(23, 45)}`);

function add(usn1, usn2) {
    return `a total of ${usn1 + usn2}`;
  }

  console.log(`Sum is ${add(151,153)}`);
