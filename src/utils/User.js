import objIsEmpty from "./objIsEmpty";

export default class User {
    constructor(email,pass,username){
        this.email = email;
        this.pass = pass;
        this.username = username;
    }

    addUser() {
        const newUser = {
            userEmail: this.email,
            userPass: this.pass,
            userName: this.username,
            favoriteFilms: []
        };

        if(localStorage.getItem('Users') === null) {
            const userList = {
                users: [newUser]
            }
            localStorage.setItem('Users', JSON.stringify(userList));
        } else {
            if(!objIsEmpty(this.checkUser(this.email))) return {};
            let userList = JSON.parse(localStorage.getItem('Users'));
            console.log(userList);
            userList.users.push(newUser);
            localStorage.setItem('Users', JSON.stringify(userList));
        }

        console.log('отработала addUser');
        return newUser;
    }

    checkUser(email = null){
        const users = JSON.parse(localStorage.getItem('Users'));
        let userData = {};

        if(users === null) return userData;
        for(let user of users.users) {
            if(user.userEmail === email){
                userData = user;
            }
        }

        return userData;
    }

    static currentUser(){
        const currentUser = localStorage.getItem('currentUser');
        return currentUser;
    }

    LoginUser(email){
        console.log('login user');
        localStorage.setItem('isLogin', true);
        localStorage.setItem('currentUser', email);
    }

    logOutUser(){
        localStorage.setItem('isLogin', false);
        localStorage.setItem('currentUser', `guest_${navigator.userAgent}`)
    }

    static isLogin(){
        let isLogin = JSON.parse(localStorage.getItem('isLogin'));
        if(isLogin === null) isLogin = false;
        return isLogin;
    }

}

