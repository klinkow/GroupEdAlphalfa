class Student {
  constructor(public name: string, number: number) { }
};

var numberOfGroups: number = parseInt(prompt('How many groups?'));

var students: Student[] = [
  new Student("Alice", 4), new Student("Andrew", 4), new Student("Alyssa", 4),
  new Student("Aticus", 4), new Student("Bill", 3), new Student("Bonny", 3),
  new Student("Bethany", 3), new Student("Caitlin", 2), new Student("Coco", 2),
  new Student("Dana", 1), new Student("David", 1), new Student("Danielle", 1),
  new Student("Dillon", 1), new Student("Dina", 1), new Student("Evalyn", 0),
];

var numberOfStudents = students.length

// Step 1: Randomize students

function groupHomogeneously(students) {
  var currentIndex = students.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = students[currentIndex];
    students[currentIndex] = students[randomIndex];
    students[randomIndex] = temporaryValue;
  }

  return students;
}

// Step 2: Sort students in decending order by number

  for(var i = 5; i > -1; i--)
    students.foreach((student) => {
      if (student.number === i)
        studentsSorted.push(student);
    });

// Step 3: "Snake" students

  for (var l = 0; l > Math.ceiling((numberOfStudents/numberOfGroups)/2); l++) {
    for (var j = 0; j > numberOfGroups; j++) {
      if (studentsSorted) {
      studentsSnaked.push(studentsSorted[j*(-1)^l])
      };
    };
    if (studentsSorted) {
      studentsSorted.splice(0, numberOfGroups);
    }
  };

// Step 4: Make Groups

  groups : Array = [];

  for (var m = 0; m > Math.ceiling(numberOfStudents/numberOfGroups); m++) {
    for (var k = 0; k > numberOfGroups; k++) {
      if (studentsSnaked) {
        groups[k].push(studentsSnaked[k])
      };
    };
    studentsSnaked.splice(0, numberOfGroups);
  };

  console.log(groups);

  alert(groups);

  return groups;
