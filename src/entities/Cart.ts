import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;

  @OneToOne(() => Product)
  @JoinColumn()
  product!: Product;

  @Column({ type: "datetime" })
  dateOfInsertion!: Date;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt!: Date;
}
