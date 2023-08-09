"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
(0, child_process_1.exec)('python3 test.py', function (error, stdout, stderr) {
    if (error) {
        console.log("error: ".concat(error.message));
    }
    else if (stderr) {
        console.log("stderr: ".concat(stderr));
    }
    else {
        console.log(stdout);
    }
});
