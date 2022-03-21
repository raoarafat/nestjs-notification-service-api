import { Injectable } from '@nestjs/common';
import { UserModel } from '../model/user-model';
import { UserService } from '../services/user.service';

@Injectable()
export class UserProvider {
  constructor(private userService: UserService) {}
  // methods
  getUserById(id: string): UserModel {
    return this.userService.getUsers().find((u) => u.id == id);
  }
}
