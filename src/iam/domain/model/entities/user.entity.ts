import { AggregateRoot } from '@nestjs/cqrs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmailAddress } from '../value-objects/email-address.value-object';
@Entity('users')
export class User extends AggregateRoot {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column(() => EmailAddress)
  email: EmailAddress;
  @Column({ name: 'password' })
  password: string;

  constructor() {
    super();
  }
}
