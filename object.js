var student1 = {id:121 , phone:555 , name:"mim"} //{property:value, property:value};
var student2 = {id:345 , phone:777 , name:"akib"}
console.log(student1);
console.log(student2);

// kono definite property access korte

var student1 = {id:121 , phone:555 , name:"mim"}
var student2 = {id:345 , phone:777 , name:"akib"}

var phoneNo = student1.phone; 
/*var phoneNo=student["phone"];
var phonePropName="phone";
var phoneNo=student2["phonePropName"];
console.log(phoneNo) */
console.log(phoneNo);
console.log(student2);

// property add
var student1 = {id:121 , phone:555 , name:"mim"}
var student2 = {id:345 , phone:777 , name:"akib"}

student2.cinema = "Iron man";
console.log(student2);

// property change 
var student1 = {id:121 , phone:555 , name:"mim"}
var student2 = {id:345 , phone:777 , name:"akib"}

student2.phone = 100045;
console.log(student2);



