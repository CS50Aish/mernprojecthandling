const { readFile } = require("fs");

// Non-blocking task to read file

readFile("./demoFile.md", (error, data) => {
    if(error){
        console.error(error);
        return;
    }
    console.log(">>> File content\n\b", data.toString());
});