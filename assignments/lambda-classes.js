// CODE here for your Lambda Classes

//Base class
class Person {
	constructor(attributes) {
		this.name = attributes.name;
		this.location = attributes.location;
		this.age = attributes.age;
		this.gender = attributes.gender;
	}
		speak(){
			return `Hello my name is ${this.name} and I am from ${this.location}.`;
		}
}

//Child class
class Instructor extends Person {
	constructor(childAttributes) {
		super(childAttributes);
		this.favLanguage = childAttributes.favLanguage;
		this.specialty = childAttributes.specialty;
		this.catchPhrase = childAttributes.catchPhrase;
	}
	demo(subject){
		return `Today we are learning about ${this.subject}`;
	}
	grade(student, subject) {
		return `${this.student} ${this.name} receives a perfect score on {subject}`;
	}
}

//Grandchild Class
class Student extends Instructor {
	constructor(grandChildAttributes) {
		super(grandChildAttributes);
		this.previousbackground = grandChildAttributes.previousbackground;
		this.className = grandChildAttributes.className;
		this.favSubjects = grandChildAttributes.favSubjects;
	}
	listsSubject() {
		return `These are my favorite subjects in Lambda School: ${this.favSubjects[0]} ${this.favSubjects[1]} ${this.favSubjects[2]}`;
		}
	PRAssignment(){
		return `${this.Student.name} has submitted a PR for ${this.subject}`;
	}
}


//attributes
const fred = new Person({
  name: 'Fred',
  location: 'Bedrock',
  age: 100,
  gender: 'male',
});


const Josh = new Instructor ({
  name: 'Josh',
  location: 'Utah',
  age: 34,
  gender: 'male',
  favLanguage: "JavaScript, Python, Elm",
  specialty: "Redux",
  catchPhrase: "Don't forget the homies"
});

const em = new Student ({
	name: 'Em',
  location: 'Seattle',
  age: 65,
  gender: 'female',
  previousbackground: "healthcare",
  className: "CS132",
  favSubjects: ["HTML", "CSS", "Javascript"],
});

const projectManager = new ProjectManager ({
	name: 'Johnathan',
  location: 'Unknown',
  age: 100,
  gender: 'male',
  gradClassName: "CSI",
  favInstructor: "Sean PDiddy Combs"
});


//Testing
console.log(fred.name);
console.log(fred.speak());
console.log(fred.age);
console.log(Josh);
console.log(Josh.demo());
console.log(em. listsSubject());
console.log(em);

