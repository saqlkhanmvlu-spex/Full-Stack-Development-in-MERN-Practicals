let student = {
    rollNo: 13,      
    Name: "Saqlain Khan", 
    Marks: 67         
};

console.log("\n Accessing Properties: ");
console.log("Name : ", student.Name);
console.log("Marks : ", student.Marks);

// Updating Property
student.Marks = 69;
console.log("\n After Updating Marks : ");
console.log(student);

// Adding a Property
student.city = "Mumbai";
console.log("\nAfter Adding City : ");
console.log(student);

// Deleting
delete student.rollNo;
console.log("\nAfter Deleting : ");
console.log(student);