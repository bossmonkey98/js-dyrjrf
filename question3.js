var person = {
  age: 25,
  getAge: function () {
    return this.age;
  },
};

// 1. What is the result? Why?
console.log(person.getAge());
var getAge = person.getAge;

// 2. What is the result? Why?
console.log(getAge());

person = {
  age: 25,
  getAge: () => this.age,
};

// 3. What is the result? Why?
console.log(person.getAge());
getAge = person.getAge;

// 4. What is the result? Why?
console.log(getAge());

person = {
  age: 25,
  family: ['Neo', 'Trinity'],
  getData: function () {
    this.family.forEach(function (name) {
      console.log(`Age: ${this.age}, Name: ${name}`);
    });
  },
};

// 5. What is the result?
console.log(person.getData());
