// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.
const students=["Priya","Arun","Divya","Rahul","Sneha"];

//Print First and Last element from students names
firstelement=students[0];
secelement=students[4];
console.log("firstel-"+firstel);
console.log("secel-"+secel);

//Add Karthick to the end of the Array
add=students.push("karthick");
console.log(students);

//Remove the Last Student of the Array
remove=students.pop();
console.log("remove-"+remove);

//Create a new Array "ARUN","DIVYA","RAHUL"
slicee=students.slice(1,4);
console.log("slice-"+slicee);

// Remove Divya from the original Array
splice=students.splice(2,1);
console.log("splicee-"+splicee);
console.log(students);

//Check whether Priya exists in the array
inclu=students.includes("Priya");
console.log(inclu);
console.log(students);