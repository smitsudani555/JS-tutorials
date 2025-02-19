const tind_user = {}

tind_user.name = "Smit"
tind_user.age = 19
tind_user.is_logging = false

console.log(tind_user);

const reg_user = {
    email : "smit@gmail.com",
    full_name : {
        user_name : {
            first_name : "smit",
            last_name : "sudani"
        }
    }
}

console.log(reg_user);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj34 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2,obj4)
console.log(obj34);
console.log(obj3);

const obj5 = {...obj1,...obj1}
console.log(obj5)


const users = [
    {
        id:1,
        email:"smit@gmail.com"

    },
    {
        id:2,
        email:"smit@gmail.com"

    },
    {
        id:1,
        email:"smit@gmail.com"

    },
]

users[1].email

console.log(tind_user)
console.log(Object.keys(tind_user));
console.log(Object.values(tind_user));
console.log(Object.entries(tind_user));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor)



// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]