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
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject) {
			student.grade += Math.floor((Math.random() * 10), 2);
			return `${this.name} graded ${student.name}'s ${subject} assignment. \n${student.name}'s grade is ${student.grade}%`;
		}
}

//Grandchild Class
class Student extends Instructor {
	constructor(grandChildAttributes) {
		super(grandChildAttributes);
		this.previousbackground = grandChildAttributes.previousbackground;
		this.className = grandChildAttributes.className;
		this.favSubjects = grandChildAttributes.favSubjects;
		this.grade = grandChildAttributes.grade;
	}
	listsSubject() {
		return `These are my favorite subjects in Lambda School: ${this.favSubjects}`;
		}
	PRAssignment(){
		return `${this.name} has submitted a PR for ${this.subject}`;
	}
	sprintChallenge(){
		return `${this.name} has begun spring challenge ${this.subject}`;
	}
	grade() {
		return
	}
}

//Great-Grandchild Class

class ProjectManager extends Student {
	constructor(greatGrandChildAttributes) {
		super(greatGrandChildAttributes);
		this.gradClassName = greatGrandChildAttributes.gradClassName;
		this.favInstructor = greatGrandChildAttributes.favInstructor;
	}
	standUp(channel) {
		return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`;
		}
	debugsCode(){
		return `${this.name} debugs ${em.name} 's code on ${this.subject}`;
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
  grade: 88
});

const Johnathan = new ProjectManager ({
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
console.log(Johnathan.favInstructor);
console.log(Johnathan.debugsCode());
console.log(em.PRAssignment());
console.log(em.sprintChallenge('today'));
console.log(Johnathan.standUp());
console.log(Josh.grade('LaLa', 'math'));
console.log(Josh.grade('Rosco', 'music'));
console.log(em.grade);
