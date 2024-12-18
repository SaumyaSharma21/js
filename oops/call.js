function SetUsername(username){
    //complex db calls
    this.username = username
    console.log("called");
}
function cretaeUser (username, email, password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password

}
const abc = new cretaeUser("abc", "abc@fb.com", "123")
console.log(abc);
// call passes the current execution context to other function
