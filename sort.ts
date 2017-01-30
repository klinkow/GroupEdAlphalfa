class Student {
  constructor(public name: string, public number: number) { }
};

class Group {
  constructor(public name: string, public students: Student[]) { }
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

  var currentIndex : number = students.length
  var temporaryValue : Student;
  var randomIndex : number = 0;
  
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


  // Step 3: "Snake" students

  var studentsSnaked : Student[] = [];
  var tempArray : Student[] = [];

  for (var j = 0; studentsSorted.length >= numberOfGroups; j++) {
    for (var l = 0; l < numberOfGroups; l++) {
      if (studentsSorted[0]) {
        studentsSnaked.push(studentsSorted[0]);
      };
      if (studentsSorted[numberOfGroups]) {
        tempArray.push(studentsSorted[numberOfGroups]);
      };
      studentsSorted.shift();
    };
    if (tempArray[0]) {
      tempArray.reverse();
      tempArray.forEach((element) => {
        studentsSnaked.push(element)
      });
      if (studentsSorted[numberOfGroups-1]) {
        studentsSorted.splice(0, numberOfGroups);
      };
      tempArray = [];
    };
  };

  // Step 4: Make Groups

  var groups : Group[] = [];

  for (var n = 0; n < numberOfGroups; n++) {
    groups.push(new Group("group".concat(n+1), []));
  };

  for (var m = 0; m < Math.ceil(numberOfStudents/numberOfGroups); m++) {
    for (var k = 0; k < numberOfGroups; k++) {
      if (studentsSnaked) {
        groups[k].students.push(studentsSnaked[k]);
      };
    };
    studentsSnaked.splice(0, numberOfGroups);
  };

  groups.forEach((group) => {
    console.log(group.name);
    console.log(group.students);
  });
  return groups;

}

groupHomogeneously(students);
