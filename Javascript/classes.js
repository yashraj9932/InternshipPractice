//classes always work in strict mode
class Student {
  name;
  email;
  rollno;
  #password;
  constructor(name, email, rollno) {
    this.name = name;
    this.email = email;
    this.rollno = rollno;
  }

  //prototype methods
  get Email() {
    return this.email;
  }
  //generator methods
  getEmail() {
    return this.email;
  }
  static college = "MUJ";
}

const Yash = new Student("Yash Raj", "yash@pplwork.com", 199302201);

console.log(Yash.Email);
console.log(Yash.email);
console.log(Yash.getEmail());

console.log(Student.college);

console.log(Yash.name);
