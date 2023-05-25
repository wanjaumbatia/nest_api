import { LoginDto } from 'src/auth/dtos/login.dto';
import { AuthService } from 'src/auth/services/auth.service';
import { RegisterDto } from '../dtos/register.dto';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    login(req: any, body: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            name: any;
            role: any;
        };
    }>;
    registerByEmail(body: RegisterDto): Promise<{
        access_token: string;
        user: {
            id: any;
            name: any;
            role: any;
        };
    }>;
    User(req: any): Promise<any>;
}
