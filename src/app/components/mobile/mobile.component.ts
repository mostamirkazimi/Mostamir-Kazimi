import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { MatCard, MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MobileService } from '../../services/mobile.service';
import { MobileModule } from '../../Model/mobile';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,MatCardModule,FormsModule,],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent implements OnInit {

  constructor(private mobileService:MobileService){}
  mobileMode:boolean = false;

  ngOnInit(): void {
    this.getMobile()
  }

  
   mobileModel:string[] = ["Summsung","IPhon","Infinix","Itel"]
  Lists:any = [];

  getMobile(){
    this.mobileService.getMobile().subscribe((res)=>{
      this.Lists = res;
    })
  }

  mobile:MobileModule = {
    mobile_id:0,
    mobile_name:"",
    mobile_model:"",
    quantity:0,
    price:0,
  }


   

  addMobile(){
    this.mobileService.addMobile(this.mobile).subscribe((res)=>{
      this.getMobile()
      this.reset()
    })
  }

 
        
  updateMobile(mobileData:MobileModule){
    this.mobile = mobileData;
    
    this.mobileMode = true;

  }


  deleteMobile(id:number){
     this.mobileService.deleteMobile(id).subscribe((res)=>{
      alert("success");
      this.getMobile()
    })
  }




  reset():void{
    this.mobile= {
      mobile_id:0,
      mobile_name:"",
      mobile_model:"",
      quantity:0,
      price:0,
    }

    this.mobileMode = false;
  }

}
