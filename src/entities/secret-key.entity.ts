import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SecretKey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: 'Active' })
  licenseStatus: string;

  @Column({ nullable: false })
  consumerKey: string;

  @Column({ nullable: false })
  consumerSecret: string;

  @Column({ nullable: false })
  tokenId: string;

  @Column({ nullable: false })
  tokenSecret: string;

  @Column({ nullable: false })
  accountId: string;

  @Column({ nullable: false, default: 'true' })
  isStatus: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
