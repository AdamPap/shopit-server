import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

enum UserRole {
  ADMIN = "Admin",
  PRODUCTSELLER = "Product Seller",
  USER = "User",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column()
  name!: string;

  @Column()
  surname!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  userRole!: UserRole;

  @Column({ default: false })
  confirmed!: boolean;

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
