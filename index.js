const core = require('@actions/core');
const github = require('@actions/github');

try {
    const name = core.getInput('NAME');
    const age = Number(core.getInput('AGE'));
    const years = core.getInput('TIMESPAN');
    let newAge = age + years;

    console.log("Hello " + name + ", in " + years + " years, you wil be " + newAge +"! Won't you feel old?...");
} catch (error) {
  core.setFailed(error.message);
}