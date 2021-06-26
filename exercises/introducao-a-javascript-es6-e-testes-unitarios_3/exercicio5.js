const assert = require('assert');
const greetPeople = (people) => {
  let greeting = [];
  for (let person = 0; person < people.length; person += 1) {
    greeting.push(`Hello ${people[person]}`);
  }

  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof(greetPeople), 'function');
assert.deepStrictEqual(greetPeople(parameter), result);

const param = greetPeople(parameter);
assert.deepStrictEqual(param, result);
