function getFirstName() {
  let firstName;

  do {
    firstName = prompt('Enter first name');
  } while (firstName === null || !isNaN(firstName) || firstName === '');

  return firstName;
}

function getLastName() {
  let lastName;

  do {
    lastName = prompt('Enter last name');
  } while (lastName === null || !isNaN(lastName) || lastName === '');

  return lastName;
}

function getAge() {
  let age;

  do {
    age = prompt('Enter your age');
  } while (isNaN(age) || age === null || age === '');

  return age;
}

const firstName = getFirstName();
const lastName = getLastName();
const age = getAge();

alert(`Hi, ${firstName} ${lastName}, your age - ${age}`);
