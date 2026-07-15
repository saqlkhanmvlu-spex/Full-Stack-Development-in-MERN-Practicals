let students = [
    {
    rollNo: 13,
    Name: "Saqlain Khan",
    Marks: 67
},
{
    rollNo: 14,
    Name: "Ritesh",
    Marks: 68
},
{
    rollNo: 15,
    Name: "Himani",
    Marks: 69
}
];
function display(s)
{
    console.log("Student Details");
    console.log("-----------------");
    for (let stud of s)
{
    console.log(`Roll No : ${stud.rollNo}`);
    console.log(`Name : ${stud.Name}`);
    console.log(`Marks : ${stud.Marks}`);
    console.log(`--------------------------`);
}
}
display(students);