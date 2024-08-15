import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity({name : "computer"})
export class Computer {
    @PrimaryGeneratedColumn()
    id : number;
 

 @Column()
 name : string;
 
 @Column()
 ram:string;

 @Column()
 rom:string;

 @Column()
 grafig:string;

 @Column()
 price:number;

 @Column()
 quantity:number;

}
