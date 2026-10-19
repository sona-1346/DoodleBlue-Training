function display(callback){
  console.log("Hello");
  callback();
}
function message(){
  console.log("Welcome");
};
display(message);