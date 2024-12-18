//const tinderUSer = new Object() // singleton object
const tinderUSer = {} // non singleton object

tinderUSer.is = "123abc"
tinderUSer.name = "abby"
tinderUSer.isLoggedIn = false

//console.log(tinderUSer);

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullname : {
            firstname :"saumya",
            lastname : "sharma"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}

const obj3 = Object.assign({},obj1, obj2, obj4)// empty set is target and others are source, i.e other mentioned values are assigned to the target which is an empty set

//const obj3 = {...obj1,...obj1[1].obj2}
//console.log(obj3);

const users =[
    {
    id: 1,
    email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

// users[1].email
// console.log(tinderUSer);

// console.log(Object.keys(tinderUSer));
// console.log(Object.values(tinderUSer));
// console.log(Object.entries(tinderUSer));

// console.log(tinderUSer.hasOwnProperty('isLogged'));

//destructuring of objects
const course = {
    coursename : "javascripy",
    price: "999",
    courseInstructor: "abc"
}
//course.courseInstructor
const{courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

//API 
// {
//     name: "saumya",
//     coursename: "javascript",
//     price: "free"
// }


{
    {},
    {},
    {}
}
//json, object notation


