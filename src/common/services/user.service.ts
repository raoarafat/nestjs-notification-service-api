import { Injectable } from '@nestjs/common';
import userData from '../contents/user-data.json';
import { UserModel } from '../model/user-model';

@Injectable()
export class UserService {
  // methods
  // TODO : data come from API
  getUsers(): UserModel[] {
    return userData as UserModel[];
  }
}
