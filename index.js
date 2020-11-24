const core = require('@actions/core');
const github = require('@actions/github');

try {
    let name = core.getInput('yourName');
    let age = core.getInput('yourAge');
    let years = core.getInput('additonalYears');
    let newAge = age + years;
    console.log("Hello " + name + ", in " + years + ", you wil be " + newAge +"! Won't you feel old?...");
} catch (error) {
    core.setFailed(error.message);
}