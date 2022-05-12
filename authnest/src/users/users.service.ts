import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Yash',
      username: 'yash',
      password: 'sosecure',
    },
    {
      id: 2,
      name: 'Raj',
      username: 'raj',
      password: 'sosecuretoo',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
