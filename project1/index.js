const { readFile } = require("fs");
const { readFileSync } = require("fs");

// Non-blocking task to read file

readFile("./demoFile.md", (error, data) => {
    if(error){
        console.error(error);
        return;
    }
    console.log(">>> Asynchronous File Content\n\b", data.toString());
});

// Blocking task to read the file
async function readFileContent(){
    const data = await readFileSync("./demoFileSync.md");
    console.log(">>> Synchronous File Content\n\b", data.toString());
};

readFileContent();