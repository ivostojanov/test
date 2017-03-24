alert("Hello World!");

var age, name;

do{
name = prompt("Enter your name:", "Enter name here:");
}while(name=="" || name=="Enter your name:")
	
do{
age = prompt("Enter your age:", "eg: 120");
}while(isNaN(age))
	
console.log("Name:"+name+"\nAge:"+age);

document.getElementById("name").innerHTML = "------"+name+"------";
document.getElementById("para").innerHTML = "So your name is "+name+" and you are "+age+" years old.";
