import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public civility: string;

  @Column()
  public first_name: string;

  @Column()
  public last_name: string;

  @Column()
  public email: string;

  @Column()
  public telphone: number;

  @Column()
  public street: string;

  @Column()
  public city: string;

  @Column()
  public zip_code: number;

  @Column()
  public login: string;

  @Column()
  public password: string;
}
