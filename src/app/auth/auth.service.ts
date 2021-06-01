import { AuthData } from "./auth-data";
import { User } from "./user.model";
import { Subject } from 'rxjs'
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()

export class AuthService {
    authChange = new Subject<boolean>();
    private user!: User;

    constructor(private router: Router) {

    }
    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessfully()
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessfully()
    }

    logout() {
        this.user.email = '';
        this.user.userId = '';

        this.authChange.next(false);
        this.router.navigate(['/signin'])
    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user != null
    }

    private authSuccessfully() {
        this.authChange.next(true)
        this.router.navigate(['/training'])

    }

}