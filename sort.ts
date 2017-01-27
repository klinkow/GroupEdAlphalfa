class Student {
  constructor(public name: string, public number: number) { }
};

var numberOfGroups: number = parseInt(prompt('How many groups?'));

var students: Student[] = [
  new Student("Alice", 4), new Student("Andrew", 4), new Student("Alyssa", 4),
  new Student("Aticus", 4), new Student("Bill", 3), new Student("Bonny", 3),
  new Student("Bethany", 3), new Student("Caitlin", 2), new Student("Coco", 2),
  new Student("Dana", 1), new Student("David", 1), new Student("Danielle", 1),
  new Student("Dillon", 1), new Student("Dina", 1), new Student("Evalyn", 0),
];

var numberOfStudents : number = students.length;


function groupHomogeneously(students) {

  // Step 1: Randomize students

  var currentIndex = students.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = students[currentIndex];
    students[currentIndex] = students[randomIndex];
    students[randomIndex] = temporaryValue;
  }

  // Step 2: Sort students in decending order by number

  var studentsSorted : Student[] = [];

  for (var i = 5; i > -1; i--) {
    students.forEach((student) => {
      if (student.number === i) {
        studentsSorted.push(student);
      };
    });
  };

  console.log(studentsSorted);
  // Step 3: "Snake" students

  var studentsSnaked : Student[] = [];

  for (var l = 0; l < Math.ceil(numberOfStudents/numberOfGroups); l++) {
    var extra : number;
    if (Math.pow(-1,l) === 1) {
      extra = 0;
    } else {
      extra = 1;
    };
    for (var j = 0; j < numberOfGroups; j++) {
      if (studentsSorted[(j+extra)*Math.pow(-1,l)]) {
      studentsSnaked.push(studentsSorted[(j+extra)*Math.pow(-1,l)])
      };
    };
    if (studentsSorted[numberOfGroups-1]) {
      studentsSorted.splice(0, numberOfGroups);
    }
  };
  console.log(studentsSnaked);
  // Step 4: Make Groups

  var groups = [];

  for (var m = 0; m > Math.ceil(numberOfStudents/numberOfGroups); m++) {
    for (var k = 0; k > numberOfGroups; k++) {
      if (studentsSnaked) {
        groups[k].push(studentsSnaked[k])
      };
    };
    studentsSnaked.splice(0, numberOfGroups);
  };

  console.log(groups);

  return groups;

}

groupHomogeneously(students);
