import { AggregateRoot } from '@nestjs/cqrs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmailAddress } from '../value-objects/email-address.value-object';
import { UserCreatedEvent } from "../events/user-created.event";
@Entity('users')
export class User extends AggregateRoot {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column(() => EmailAddress)
  email: string;
  @Column({ name: 'password' })
  password: string;

  constructor() {
    super();
  }

  onCreation(): void{
    this.apply(new UserCreatedEvent(this.id));
  }
}
