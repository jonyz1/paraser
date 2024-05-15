import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { goodsservice } from "./goodsservice.entity";

@Entity()
export class supplier{
    @PrimaryColumn()
    id	:number
    @Column('numeric', { precision: 15, scale: 2 })
    supplier_code:number
    @Column({nullable:true})
    supplier_name:string
    @Column({nullable:true})	
    email_official	:string
    @Column({nullable:true})
    website:string
    @Column({nullable:true})
    business_telephone:string
    @Column({nullable:true})	
    mobile_number	:string
    @Column({nullable:true})
    postal_address	:string
    @Column({nullable:true})
    business_premise:string
    @Column({nullable:true})	
    expire_date	:string
    @Column({nullable:true})
    date_s	:string
    @Column({nullable:true})
    signature:string
    @Column('numeric', { precision: 15, scale: 2 })	
    branch_name	:number
    @Column({nullable:true})
    account_name:string
    @Column('numeric', { precision: 15, scale: 2 })	
    account_number:number	
    @Column({nullable:true})
    trading_name:string
    @Column('numeric', { precision: 15, scale: 2 })	
    company_tin	:number
    @Column('numeric', { precision: 15, scale: 2 })
    number_employees_staff	:number
    @Column({nullable:true})
    shareholder_first_name:string	
    @Column({nullable:true})
    Shareholder_last_name	:string
    @Column({nullable:true})
    gender	:string
    @Column({nullable:true})
    contact_number:string
    @Column({nullable:true})	
    business_type:string
    @Column({nullable:true})	
    nationality	:string
    @Column({nullable:true})
    business_location:string
    @Column({nullable:true})	
    country	:string
    @Column({nullable:true})
    supplier_status:string	
    @Column({nullable:true})
    application_type:string
    @Column({nullable:true})	
    dg_approval:string
    @Column({nullable:true})
    bank_name	:string
    @Column({nullable:true})
    account_type:string
    @Column({nullable:true})	
    currency	:string
    @Column({nullable:true})
    msme_type:string

    // @OneToMany(() => goodsservice, (good) => good.suplier)
    // catagoreis:goodsservice[]
   

    

}