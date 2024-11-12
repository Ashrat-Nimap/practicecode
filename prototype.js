function Student() {
    this.name = 'Ashrat';
    this.gender = 'M';
}

Student.prototype.age = 23;
Student.prototype.lastname = "shaikh"

var studObj1 = new Student();
console.log(studObj1.age); //23
console.log(studObj1.lastname);

var studObj2 = new Student();
console.log(studObj2.age); //23