import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { supplier } from "./supplier.entity"

@Entity()
export class goodsservice{
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:true})
    category:string
    @Column('numeric', { precision: 15, scale: 2 ,nullable:true})
    from:number
    @Column({nullable:true})
    to:number
    @ManyToOne(() => supplier,{cascade:true})
    suplier:supplier;
}

// , (supp) => supp.catagoreis