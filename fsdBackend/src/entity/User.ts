import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
    OneToMany,
    ManyToMany,
    JoinTable,
} from "typeorm";

import * as bcrypt from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }
  
    async comparePassword(attempt: string): Promise<boolean> {
      return await bcrypt.compare(attempt, this.password);
    }
  
    toResponseObject(showToken: boolean = true): User {
      const { id, firstName, lastName, email, age, password, hashPassword, comparePassword, toResponseObject } = this;
      const responseObject: User = {
        id,
        firstName,
        lastName,
        age, 
        email,
        password,   
        hashPassword,
        comparePassword,
        toResponseObject
      };
  
      return responseObject;

}
}
