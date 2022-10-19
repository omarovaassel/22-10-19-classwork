// 19/10/22
//
// // функция, которая создает все поля пользователя, таким образом мы можем избежать проблемы, когда
// // разработчик забыл указать одно из полей, например, фамилия и имя
// // то есть гарантированно через такую функцию у нас будут все поля
//
// function createPerson(newFullName = "default name", newAge = 1, newEmail = "asd@mail.com"){
//     return {
//         fullName: newFullName,
//         age: newAge,
//         email: newEmail
//     }
// }
//
// // показываем только имя пользователя
// function showName(obj){
//     console.log(obj.fullName.split(" ")[1]);
// }
//
// let person2 = createPerson();
// showName(person2);


// ------------------------------------------------------------------------------------------------------------

// this - это объект, внутри которого мы назодимся, причем глобальный объект всегда
// this - это контекст (вырвать из контекста)

let user = {
    login: "realibi",
    passwords: ["asd123", "qwerty"],
    location: {
        city: "Almaty",
        street: "Navoi",
    },
    loginFunk: function (){  // внутри объекта функция пишется немного по другому, сначала название функции и потом function
        console.log(`${this.login} logged in`);  // покажет значение login в объекте user, т.е. это тоже самое что и user.login
        // console.log(`${this.login} ${this.location} logged in`);  // покажет значение login и location в объекте user
    }
}

user.loginFunk(); // вызываем функцию для объекта user

