const pwdExports = require('./pwd');
const lsExports = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd'){
    pwdExports.pwd();
  } else if (cmd === 'ls') {
    lsExports.ls();
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});


