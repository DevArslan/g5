import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit } from '@angular/core';
import { UsersService } from "shared/services/users.service";
import { finalize, map } from "rxjs";
import { User } from "shared/models/users";
import { ActivatedRoute } from "@angular/router";
import { UsersPagePaths } from "./constants/routes";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
    public users: Array<User> = []
    public loading = false
    public columns = [ 'Login', 'Avatar', 'Type', 'Score']

    public isTableView = true

    constructor(private usersService: UsersService, private route: ActivatedRoute, private destroyRef: DestroyRef, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.isTableView = this.route.snapshot.routeConfig?.path === UsersPagePaths.Table
    }

    public setUsers(search: string) {
        this.loading = true
        this.usersService.getUsers(search)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                map(response => response.items),
                finalize(() => {
                    this.loading = false
                    this.cdr.detectChanges()
                })
            )
            .subscribe({
                next: (users) => this.users = users,
                error: (e) => alert('Error occurred.'),
            })
    }
}
