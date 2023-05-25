import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class LoginLog{
    @PrimaryGeneratedColumn({type:'bigint'})
    id: number;

    @ManyToOne(()=>User, (user)=>user.login_logs)
    user: User;

    @Column()
    ipAddress: string;
    
    @Column()
    browser: string;
    
    @Column()
    engine: string; 
    
    @Column()
    os: string;
    
    @Column()
    cpu: string;
    
    @Column()
    userAgent: string;

    @CreateDateColumn()
    createdAt: Date;
}