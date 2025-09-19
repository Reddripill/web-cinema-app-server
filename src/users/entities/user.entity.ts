import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 15 })
  user_name: string;

  @Column({ length: 30 })
  email: string;

  @Column({ type: 'text' })
  password: string;
}
