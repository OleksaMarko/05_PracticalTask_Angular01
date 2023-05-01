import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { IUser } from './user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  public $users: Observable<IUser[]> = this.userService.getUsers();

  constructor(private userService: UserService) {}
}
