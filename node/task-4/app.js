const fs = require("fs");
const data = { name: "Employee 1 Name", salary: 2000 };
const file = "employees.json";

const create = () => {
    fs.writeFileSync(file, JSON.stringify(data), "utf8");
    console.log(`file ${file} created\n`);
};

const read = (err) => {
    console.log(`file ${file} read:`);
    console.log(fs.readFileSync(file).toString("utf-8"), "\n");
};

const update = () => {
    fs.appendFileSync(file, "\nNew content!");
    console.log(`file ${file} updated:`);
    console.log(fs.readFileSync(file).toString("utf-8"), "\n");
};

const del = () => {
    fs.unlinkSync(file);
    console.log(`file ${file} deleted`);
}

create();
read();
update();
del();
