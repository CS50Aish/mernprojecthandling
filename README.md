# mernprojecthandling
Developing Reliable Backend MERN Stack Development and Handling Projects

labuser@ubuntu2204:~/Desktop/mernprojecthandling$ cd project1/
labuser@ubuntu2204:~/Desktop/mernprojecthandling/project1$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (project1) 
version: (1.0.0) 
description: Project Handling
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /home/labuser/Desktop/mernprojecthandling/project1/package.json:

{
  "name": "project1",
  "version": "1.0.0",
  "description": "Project Handling",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)

labuser@ubuntu2204:~/Desktop/mernprojecthandling/project1$ node index.js 
>>> Synchronous File Content
 This is a demo file which can be treated as an example file for file handling synchronous operations
>>> Synchronous File Writing Operations is Successful
>>> Asynchronous File Writing Operations is Successful
>>> Asynchronous File Content
 This is a demo file which can be treated as an example file for file handling asynchronous operations
labuser@ubuntu2204:~/Desktop/mernprojecthandling/project1$ node index.js 
>>> Synchronous File Content
 This is a demo file which can be treated as an example file for file handling synchronous operations
>>> Synchronous File Writing Operations is Successful
>>> Asynchronous File Content
 This is a demo file which can be treated as an example file for file handling asynchronous operations
>>> Asynchronous File Writing Operations is Successful

labuser@ubuntu2204:~/Desktop/mernprojecthandling/project2$ npm init -y
Wrote to /home/labuser/Desktop/mernprojecthandling/project2/package.json:

{
  "name": "project2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


labuser@ubuntu2204:~/Desktop/mernprojecthandling/project2$ npm install mysql

added 11 packages, and audited 12 packages in 2s

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/mernprojecthandling/project2$ sudo mysql -u root
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 31
Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1 Ubuntu 22.04

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> show databases;
+---------------------+
| Database            |
+---------------------+
| Agile               |
| information_schema  |
| mysql               |
| performance_schema  |
| sys                 |
| techdirectarchivedb |
+---------------------+
6 rows in set (0.123 sec)

MariaDB [(none)]> CREATE DATABASE students;
Query OK, 1 row affected (0.001 sec)

MariaDB [(none)]> show databases;
+---------------------+
| Database            |
+---------------------+
| Agile               |
| information_schema  |
| mysql               |
| performance_schema  |
| students            |
| sys                 |
| techdirectarchivedb |
+---------------------+
7 rows in set (0.000 sec)

MariaDB [(none)]> exit
Bye

labuser@ubuntu2204:~/Desktop/mernprojecthandling/project2$ sudo mysql -u root
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 35
Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1 Ubuntu 22.04

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> CREATE USER 'aish'@'localhost' IDENTIFIED BY 'pass';
Query OK, 0 rows affected (0.012 sec)

MariaDB [(none)]> GRANT ALL PRIVILEGES ON students.* TO 'aish'@'localhost';
Query OK, 0 rows affected (0.005 sec)

MariaDB [(none)]> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.000 sec)

MariaDB [(none)]> exit
Bye