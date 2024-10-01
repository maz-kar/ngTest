import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
})

export class UserComponent {
    userID: number = 10;
    userStatus: string = 'Online';

    getUserStatus() {
        return this.userStatus;
    }
}