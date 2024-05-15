import { Injectable } from '@nestjs/common';
import { sample } from 'rxjs';
// import { writeXLSX } from 'xlsx';
import * as XLSX from 'xlsx/xlsx.mjs';
import { allfile } from './samplejson';
import { supplier } from 'src/entity/supplier.entity';
import { goodsservice } from 'src/entity/goodsservice.entity';
import { createdto } from 'src/dto/create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createjson } from 'src/dto/json.dto';


@Injectable()
export class ExcelparaserService {
constructor(
    @InjectRepository(supplier)
    private readonly supplierRepository: Repository<supplier>,

    @InjectRepository(goodsservice)
    private readonly goodsRepository: Repository<goodsservice>
){

}
    

async parseExcel() {
 
    const suppliers = []
    const businessArea = []
    
    for(let i=0;i<allfile.length;i++){
    let supliers:createdto;
    let good= new goodsservice()
    let service= new goodsservice()
    supliers= allfile[i]
    console.log("created entitydata")
    suppliers.push(supliers)
    let holder=allfile[i].goods_category.split(" ")
    await this.saver(good,supliers,this.checker(holder),businessArea,"goods_category")
    let holderserv=allfile[i].services_category.split(" ")
    await this.saver(service,supliers,this.checker(holderserv),businessArea,"services_category")

}

    await this.supplierRepository.save(suppliers)
    await this.goodsRepository.save(businessArea)

}

async saver(good:goodsservice,supliers:createdto,check:any,businessArea:any[],name:string){
    if( check){
        good.from=check==null?null:1 
        good.to=check
        good.category=name
        good.suplier=supliers
        businessArea.push(good)
       console.log(name)
    }
}


checker(holder:string[]){
if(holder[0]!=="None"){
    let hol:number
    let match=holder[2].match(/MK(\d+)/)
    let num=parseInt(match[1].toString(),10)
    match[0]
    if(holder[3]){
        if(holder[3]=="Million"){
            return num*1000000
        }
        else if(holder[3]=="Billion"){
            return num*1000000000
        }
    }

}else{
    return null
}
}

}
