function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: 'John',
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: 'Alex',
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

// What will be in the console?
console.log(personObj1);
console.log(personObj2);
