var Student = (function () {
    function Student(name, number) {
        this.name = name;
        this.number = number;
    }
    return Student;
}());
;
var numberOfGroups = parseInt(prompt('How many groups?'));
var students = [
    new Student("Alice", 4), new Student("Andrew", 4), new Student("Alyssa", 4),
    new Student("Aticus", 4), new Student("Bill", 3), new Student("Bonny", 3),
    new Student("Bethany", 3), new Student("Caitlin", 2), new Student("Coco", 2),
    new Student("Dana", 1), new Student("David", 1), new Student("Danielle", 1),
    new Student("Dillon", 1), new Student("Dina", 1), new Student("Evalyn", 0),
];
var numberOfStudents = students.length;
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
    var studentsSorted = [];
    for (var i = 5; i > -1; i--) {
        students.forEach(function (student) {
            if (student.number === i) {
                studentsSorted.push(student);
            }
            ;
        });
    }
    ;
    console.log("STUDENTS SORTED:");
    studentsSorted.forEach(function (student) { console.log(student.name); });
    // Step 3: "Snake" students
    var studentsSnaked = [];
    var tempArray = [];
    for (var j = 0; studentsSorted.length > numberOfGroups; j++)
        for (var l = 0; l < numberOfGroups; l++) {
            if (studentsSorted[0]) {
                studentsSnaked.push(studentsSorted[0]);
            }
            ;
            if (studentsSorted[numberOfGroups]) {
                tempArray.push(studentsSorted[numberOfGroups]);
            }
            studentsSorted.shift();
        }
    ;
    tempArray.reverse();
    tempArray.forEach(function (element) {
        studentsSnaked.push(element);
    });
    if (studentsSorted[numberOfGroups - 1]) {
        studentsSorted.splice(0, numberOfGroups);
    }
    ;
    tempArray = [];
}
;
console.log("STUDENTS SNAKED:");
studentsSnaked.forEach(function (student) { console.log(student.name); });
// Step 4: Make Groups
var groups = [];
for (var m = 0; m > Math.ceil(numberOfStudents / numberOfGroups); m++) {
    for (var k = 0; k > numberOfGroups; k++) {
        if (studentsSnaked) {
            groups[k].push(studentsSnaked[k]);
        }
        ;
    }
    ;
    studentsSnaked.splice(0, numberOfGroups);
}
;
console.log(groups);
return groups;
;
groupHomogeneously(students);
