function Developer(name){
  this.name = name;
  this.type = "Developer";
}

function Tester(name){
  this.name = name;
  this.type = "Tester";
}

function CustomerSupport(name){
  this.name = name;
  this.type = "Customer Support";
}

function EmployeeFactory(){
  this.create = (name, type) => {
    switch(type){
        case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
      default:
        return new CustomerSupport(name);
    }
  }
}

function introduce(){
  console.log("HI my name is " + this.name + " my role is " + this.type);
}

const employees = [];
const employeeFactory = new EmployeeFactory();

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("Tommy", 2));
employees.push(employeeFactory.create("Adam", 1));
employees.push(employeeFactory.create("Neil", 2));
employees.push(employeeFactory.create("Tylor"));

employees.forEach(emp => introduce.call(emp));


