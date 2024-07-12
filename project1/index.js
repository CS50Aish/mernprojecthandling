const { readFile } = require("fs");
const { readFileSync } = require("fs");
const { writeFile } = require("fs");
const { writeFileSync } = require("fs");

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

// Non-blocking write to the file
const content = "MYSql is a relational database management system";
writeFile("asyncContent.txt", content, { encoding: 'utf-8' }, (error) => {
    if(error){
        console.error(error);
        return;
    }
    console.log(">>> Asynchronous File Writing Operations is Successful");
});

// Blocking write to the file
async function writeContentInFile(){
    try{
        const fileContent = "MongoDB is a Non-Relational Database Management System";
        const data = await writeFileSync("syncContent.txt", fileContent);
        console.log(">>> Synchronous File Writing Operations is Successful");
    }
    catch(error){
        console.log(error);
    }
}

writeContentInFile();