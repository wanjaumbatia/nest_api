import { User } from "./user.entity";
export declare class LoginLog {
    id: number;
    user: User;
    ipAddress: string;
    browser: string;
    engine: string;
    os: string;
    cpu: string;
    userAgent: string;
    createdAt: Date;
}
