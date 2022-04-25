var Employee = function(name, company, salary) {
  this.name = name || '';
  this.company = company || '';
  this.salary = salary || 5000;

  // We can create a method like this. What are the drawbacks of this approach?
  this.formatSalary = function() {
    return '$ ' + this.salary;
  };
};

//creating objects
var emp1 = new Employee('Yuri Garagin', 'Company 1', 1000000);
var emp2 = new Employee('Dinesh Gupta', 'Company 2', 1039999);
var emp3 = new Employee('Erich Fromm', 'Company 3', 1299483);
