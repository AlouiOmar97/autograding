const { log } = require('console');
const fs = require('fs');
const execSync = require('child_process').execSync;

let total = 0;
let passed = 0;
const username = execSync('git log -1 --pretty=format:"%an"').toString().trim();

afterEach(function() {
  total++;
  if (this.currentTest.state === 'passed') {
    passed++;
  }
});

after(function() {
  const grade = {
    totalTests: total,
    passedTests: passed,
    gradePercentage: (passed / total) * 100,
    username: username
  };
  console.log(grade);
  fs.writeFileSync('grade.json', JSON.stringify(grade, null, 2));

});