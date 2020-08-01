import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CreateUserComponent, ListUsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule

  ]
})
export class UsersModule { }