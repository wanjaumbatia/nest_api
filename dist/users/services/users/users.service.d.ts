import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { LoginLog } from 'src/users/entities/login-logs.entity';
import { LoginLogDto } from 'src/users/dtos/login-log.dto';
export declare class UsersService {
    private userRepository;
    private loginRepository;
    private readonly logger;
    constructor(userRepository: Repository<User>, loginRepository: Repository<LoginLog>);
    getAppointments(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    findOne(email: string): Promise<User>;
    saveLoginLogs(data: LoginLogDto, userId: number): Promise<LoginLog>;
    createUser(name: string, email: string, phone: string, password: string): Promise<User>;
    generateOtpToken(user: User): Promise<User>;
}
