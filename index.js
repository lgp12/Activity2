const core = require('@actions/core');
const github = require('@actions/github');

try {
    const name = core.getInput('NAME');
    const age = core.getInput('AGE');
    const years = core.getInput('TIMESPAN');
    console.log(name);
    console.log(age);
    let newAge = age +years;
    console.log("Hello " + name + ", in " + years + ", you wil be " + newAge +"! Won't you feel old?...");
} catch (error) {
  core.setFailed(error.message);
}