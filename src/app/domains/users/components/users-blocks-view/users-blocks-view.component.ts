import { Component, Input } from '@angular/core';
import { User } from "shared/models/users";

@Component({
    selector: 'app-users-blocks-view',
    templateUrl: './users-blocks-view.component.html',
})
export class UsersBlocksViewComponent {
    @Input() users: Array<User> = []
    @Input() columns: Array<string> = []

    trackBy(index: number, user: User) {
        return user.id
    }
}
