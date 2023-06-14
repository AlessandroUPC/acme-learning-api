import { Column } from 'typeorm';

export class EmailAddress {
  @Column({ name: 'address' })
  address: string;
}
