//we can decalre array by two types- literal and constructor
//singleton

Object.create
//object literals

const mySym= Symbol("key1");

const JsUser={
    name:"devraj",
    [mySym]:"mykey1",
    age:18,
    "full_name":"devraj sharma",
    location:"kolkata",
    email:"devraj62891@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]

};

console.log(JsUser.email);
console.log(JsUser["email"]);//beacuse we cant access "full name":"d sharma" by dot method
console.log(JsUser["full_name"]);//beacuse we cant access "full name":"d sharma" by dot method
console.log(JsUser[mySym]);


JsUser.email="devraj11085.ds@gmail.com";

// Object.freeze(JsUser); ////////////after thsi no changes can be done in the object js user



JsUser.greeting= function(){
    console.log("Hello js user");
}
JsUser.greeting2= function(){
    console.log(`Hell j suser ${this.name}`);
}

console.log(JsUser.greeting);//this is give an undefined errro
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



