// log a program that prints numbers from 1 to 100. Except, for the multiples of three, print "google" and for the multiples of five, print "facebook". And, for the multiples of both, print "amazon".  Please answer with the stackblitz link.

let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 100,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 84,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 100,
    chemistry: 81,
  },
];

// ans = [virat, leo, cristiano, rohit, viswanath anand]

testCase1.forEach((person, i) => {
  let key = "totalMarks";
  person[key] = person.biology + person.chemistry;
});

//        function to sort when totalMarks are equel

function equelMarks(person1, person2) {
  if (person1.biology > person2.biology) {
    return 1;
  }
  if (person1.biology == person2.biology) {
    checkForChemistry(person1, person2);
  }
  return -1;
}

//         function to sort when chemistryMarks are equel
function checkForChemistry(person1,person2) {
  if (person1.chemistry > person2.chemistry) {
    return 1;
  }
    if (person1.chemistry ==person2.chemistry) {
      checkForDob(person1.dob,person2.dob)
  }
  return -1;
}

// function to Compare two DateofBirths

function checkForDob(dob1, dob2) {
    if (dob1 > dob2) {
        return 1;
    }
  
}


//    function to sort Basedon TotalMarks

function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = a[key];
    const varB = b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    } else if (varA === varB) {
      comparison = equelMarks(a, b);
    }

    return order === "asc" ? comparison * -1 : comparison;
  };
}

//array after sorting
console.log("array after sorting");
console.log(testCase1.sort(compareValues("totalMarks")));
