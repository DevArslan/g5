import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "shared/services/users.service";
import { User } from "shared/models/users";
import { finalize } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
    public user: User | undefined
    public loading = true

    constructor(private route: ActivatedRoute, private userService: UsersService, private cdr: ChangeDetectorRef, private destroyRef: DestroyRef) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id')!;

        this.userService.getUser(id).pipe(takeUntilDestroyed(this.destroyRef),finalize(() => {
            this.loading = false
            this.cdr.detectChanges()
        })).subscribe(user => this.user = user)
    }
}
