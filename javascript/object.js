var student = {
  name: "abc",
  rollNo: 123,
  marks: [87, 86, 67],
};

console.log(student);

student.name = "Rahul";
console.log(student);

student.sem = "8th";
console.log(student);

console.log(student["name"]);

// get all the keys from obj
var keys = Object.keys(student);
console.log(keys);

for (var key of keys) {
  console.log(key, student[key]);
}

for (var prop in student) {
  console.log(prop + ": " + student[prop]);
}

const college = {
  name: "RKMGEC",
  code: 350,
  address: {
    city: "West Bengal",
    pincode: 720102,
  },
  stream: {
    cse: {
      noOfStd: 64,
      year: "4th",
      placed: {
        offer: 45,
        nonOffer: 12,
        higherStudies: 7,
      },
    },
    ece: {
      farewell: true,
      freshers: true,
    },
    noOfStream: 5,
  },
};

console.log(college);

for (var prop in college) {
  console.log(prop + ": " + college[prop]);
}

console.log(college.stream["cse"].placed.higherStudies);
