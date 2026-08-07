// class and object

let DATA = "secrete information";

class User{
    constructor(name , email){
        this.name = name;
        this.email = email;

    }
    viewData (){
        console.log("data =", DATA);
    }
}

class Admin extends user{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "some new";
    }
}

let student1 = new User("rohit","rohit45@gmail.com");
let student2 = new User("virat","virat18@gmail.com");

let admin = new User("admin","admin@gmail.com");

