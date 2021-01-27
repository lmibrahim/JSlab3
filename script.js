"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2. Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.
const addSubmission = (array, newName, newScore, newDate) => {
  let newStudent = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore > 60 ? true : false,
  };
  array.push(newStudent);
};

addSubmission(submissions, "Lamees", 55, "2020-01-38");

console.log(submissions);

// 3. Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using
// the splice method.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 4);
};

deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

// 4. Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return item.name === name && item.name === name;
    {
    }
  });
};

console.log(deleteSubmissionByName(submissions, "Joe"));

// 5. Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.
const editSubmission = (array, index, score) => {};

// 6. Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the
// find method.
const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};
console.log(findSubmissionByName(Submissions, "Lamees"));

// 7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.

const findLowestScore = (array) => {
  array.forEach((item) => {
    submissions = Math.min();
  });
};
