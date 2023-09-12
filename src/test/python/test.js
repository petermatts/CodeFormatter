"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
(0, child_process_1.exec)('python3 test.py', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
    }
    else if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
    else {
        console.log(stdout);
    }
});
// this Stack Overflow post was insightful https://stackoverflow.com/questions/73379587/python-script-in-a-typescript-file
//# sourceMappingURL=test.js.map