export class User {
    email: string;
    firstname: string;
    lastname: string;
    gender: number;
    password: string;
    confirmpassword: string;
    image: string;

    constructor(user: User){
        this.email = user.email;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.password = user.password;
        this.confirmpassword = user.confirmpassword;
        this.gender = user.gender;
        this.image = user.image;
    }
}