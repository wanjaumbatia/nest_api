import { UsersService } from 'src/users/services/users/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(): Promise<import("../../entities/user.entity").User[]>;
    findById(id: number): Promise<import("../../entities/user.entity").User>;
}
