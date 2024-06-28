const tinderUser= new Object();///this is similat to const tinderUser={}; but it is a single ton object and here is multi ton object


tinderUser.id="12345"
tinderUser.name="devraj"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            firstname:"devtaj",
            lastname:"sharma"
        }
    }
}

// console.log(regularUser.fullName.userfullname.lastname);


///merging two array

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

// const obj3={obj1,obj2};  ///THIS WONT WORK
// const obj3= Object.assign(obj1,obj2)   // we will rarely use this insted we will use spread operator

const obj3={...obj1,...obj2}
console.log(obj3);


const users=[
    {
        id:1,
        email:"gmail.com"
    }
]



const course={
    coursename:"js in hindi",
    price:"999",
    courseTeacher:"devraj"
}

// course.courseTeacher

const {courseTeacher:instructor}=course//destructuring an object
console.log(instructor);



///json

// {
//     "name":"devraj",
//     "coursename":"js in hindi",
//     "price":"free"
// }