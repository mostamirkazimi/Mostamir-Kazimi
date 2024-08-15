import { Entity , Column , PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"mobile"})
export class Mobile {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    mobile_name:string;

    @Column()
    mobile_model:string;

    @Column()
    quantity:number;

    @Column()
    price:number;
}
