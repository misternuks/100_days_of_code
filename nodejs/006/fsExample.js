const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'example.txt');

// Write to a file
fs.writeFile(filePath, 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File has been written.');

  // Read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File contents:', data);

    // Append to the file
    fs.appendFile(filePath, '\nAppending some text.', (err) => {
      if (err) throw err;
      console.log('Text has been appended.');

      // Read the file again to see the changes
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Updated file contents:', data);

        // Delete the file
        fs.unlink(filePath, (err) => {
          if (err) throw err;
          console.log('File has been deleted.');
        });
      });
    });
  });
});
