import { Injectable } from '@nestjs/common';

export type User = {
    id: number,
    name: string,
    username: string,
    password: string
}

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "3 Astronautas",
            username: "user3A",
            password: '12345'
        },
        {
            id: 2,
            name: "Testing",
            username: "usertest",
            password: '123456'
        }
    ];

    async findOne(username: string) {
        return this.users.find(user => user.username == username);
    }
}
