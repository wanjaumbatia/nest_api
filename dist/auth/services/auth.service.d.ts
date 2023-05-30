import { UsersService } from 'src/users/services/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../dtos/register.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    forgotPassword(email: string): Promise<import("../../users/entities/user.entity").User>;
    getLoggedInUser(user: any): Promise<import("../../users/entities/user.entity").User>;
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        user: {
            id: any;
            name: any;
            role: any;
        };
    }>;
    saveLoginLog(req: Request, id: number): Promise<void>;
    createUser(data: RegisterDto): Promise<import("../../users/entities/user.entity").User>;
}
