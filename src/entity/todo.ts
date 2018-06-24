import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn  } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    length: 400,
  })
  public title: string;

  @Column({
    length: 400,
  })
  public description: string;

  @Column()
  public isCompleted: boolean;

  @CreateDateColumn({nullable: false})
  public createdAt: Date;

  @UpdateDateColumn({nullable: false})
  public updatedAt: Date;
}
