import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public civility: 'male' | 'female' | 'other';

  @Column({name: "first_name"})
  public firstName: string;

  @Column({name: "last_name"})
  public lastName: string;

  @Column()
  public email: string;

  @Column()
  public telephone: string;

  @Column()
  public street: string;

  @Column()
  public city: string;

  @Column({ name: "zip_code" })
  public zipCode: string;

  @Column({ unique: true })
  public login: string;

  @Column()
  public password: string;

  @Column({ default: false })
  public isAdmin: boolean;
}

export type SafeClient = Omit<Client, 'password'>;

export type LoginClient = Pick<Client, 'login' | 'password'>;