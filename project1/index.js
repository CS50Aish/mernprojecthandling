const { readFile, readFileSync } = require("fs");
const { unlink, unlinkSync } = require("fs");
const { writeFile, writeFileSync } = require("fs");

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

// Non-Blocking File Deletion Task
unlink("./asyncContent.txt", (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log(">>> Asynchronous File Deletion Operation is Successful");
});

// Blocking File Deletion Task
async function deleteFile(){
    try{
        await unlinkSync("demoFileSync.md");
        console.log(">>> Synchronous File Deletion Operation is Successful");
    }
    catch(error){
        console.error(error);
    }
}

deleteFile();