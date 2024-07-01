import { Component, Input } from '@angular/core';
import { User } from "shared/models/users";

@Component({
  selector: 'app-users-table-view',
  templateUrl: './users-table-view.component.html',
})
export class UsersTableViewComponent {
  @Input() users: Array<User> = []
  @Input() columns: Array<string> = []

  trackBy(index: number, user: User) {
    return user.id
  }
}
