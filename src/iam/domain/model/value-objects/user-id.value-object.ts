import { Column } from 'typeorm';

export class UserId {
  @Column({ name: 'id' })
  id: string;
}
