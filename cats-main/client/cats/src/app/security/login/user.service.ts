import { Injectable } from "@angular/core";
import { User } from "./user";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private router: Router) {}

    validateLogin(user: User) {
        if(user.user_email == 'damazio@gmail.com' && user.user_password == '1234') {
            this.router.navigate(['/menu']);
        } else if(user.user_email == 'mota@gmail.com' && user.user_password == '1234') {
            this.router.navigate(['/menu']);
        } else {
            window.alert('Usuario Invalido!');
        }
    }
}