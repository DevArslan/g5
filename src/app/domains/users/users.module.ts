import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UsersComponent } from './users.component';
import {UsersRoutingModule} from "./users-routing.module";
import { TableComponent } from "../../shared/components/table/table.component";
import { UserComponent } from './components/user/user.component';
import { LoaderComponent } from "shared/components/loader/loader.component";
import { SearchComponent } from "shared/components/search/search.component";
import { UsersTableViewComponent } from './components/users-table-view/users-table-view.component';
import { UsersBlocksViewComponent } from './components/users-blocks-view/users-blocks-view.component';
import { ListComponent } from "shared/components/list/list.component";

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UsersTableViewComponent,
    UsersBlocksViewComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        TableComponent,
        NgOptimizedImage,
        LoaderComponent,
        SearchComponent,
        ListComponent,
    ]
})
export class UsersModule { }
