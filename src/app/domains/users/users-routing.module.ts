import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users.component";
import { UserComponent } from "./components/user/user.component";
import { UsersPagePaths } from "./constants/routes";

const routes: Routes = [
    { path: UsersPagePaths.Blocks, component: UsersComponent },
    { path: UsersPagePaths.Table, component: UsersComponent },
    { path: ':id', component: UserComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
