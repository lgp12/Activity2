// const core = require('@actions/core');

// try {
//     let name = core.getInput('yourName');
//     let age = core.getInput('yourAge');
//     let years = core.getInput('additonalYears');
//     let newAge = age + years;
//     console.log("Hello " + name + ", in " + years + ", you wil be " + newAge +"! Won't you feel old?...");
// } catch (error) {
//     core.setFailed(error.message);
// }
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const name = core.getInput('your-name');
    const age = core.getInput('your-age');
    const years = core.getInput('timespan');
    let newAge = age +years;
    console.log("Hello " + name + ", in " + years + ", you wil be " + newAge +"! Won't you feel old?...");
//   // `who-to-greet` input defined in action metadata file
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}