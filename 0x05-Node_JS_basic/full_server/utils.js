const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  if(!path) {
    reject(new Error('Cannot load the database'));
  };
  if(path) {
    fs.readFile(data, (err, data) => {
      if(err){
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.toString('utf-8').trim().split('\n');
        const studentsByField = {};
        for (let i = 1; i < lines.length; i++) {
	  const [firstName, lastName, age, field] = lines[i].trim().split(',');
	  if (!studentByField) {
	    studentsByField[field] = [];
	  }
	  studentsByField[field].push(firstName);
	}
        resolve(studentsByField);
      }
    });
  }
});
export default readDatabase;
