const fs = require('fs');
const path = require('path');

const info = `
  Directory Name: ${__dirname}
  File Name: ${__filename}
  Current Working Directory: ${process.cwd()}
  Environment Variables: ${JSON.stringify(process.env, null, 2)}
  Command Line Arguments: ${process.argv.slice(2).join(', ')}
  Memory Usage: ${JSON.stringify(process.memoryUsage(), null, 2)}
`;

fs.writeFileSync(path.join(__dirname, 'envInfo.txt'), info);

console.log('Environment information has been logged to envInfo.txt');
