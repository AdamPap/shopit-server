import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column()
  name!: string;

  @Column()
  productCode!: string;

  @Column({ type: "float" })
  price!: number;

  @Column({ type: "datetime" })
  dateOfWithdrawal!: Date;

  @Column()
  sellerName!: string;

  @Column()
  category!: string;

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
