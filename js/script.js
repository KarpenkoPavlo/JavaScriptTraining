let userInfo = {
    name: "Vasya",
    age: 30,
};

console.log(userInfo);

userInfo.name = "Lena";

console.log(userInfo.name);

delete userInfo.name;

console.log(userInfo);