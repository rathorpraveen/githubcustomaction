const core = require('@actions/core')
const github = require('@actions/github')

try{
    const username = core.getInput('username');
    console.log("Hello "+username);
    const time = (new Date()).toTimeString();
    core.setOutput('time',time);
}
catch(error)
{
    core.setFailed(error.message);
}