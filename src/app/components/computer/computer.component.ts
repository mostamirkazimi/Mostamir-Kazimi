import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import {MatCardModule} from '@angular/material/card';
;
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ComputerModule } from '../../Model/computer';
import { ComputerService } from '../../services/computer.service';


@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MatCardModule,FormsModule],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})


export class ComputerComponent implements OnInit {

  constructor(private computerService:ComputerService){}

  computerList:string[] =["DEL","HP","Apple","Toshiba"];
  computerStorage:string[] = ["256GB","512GB","1024GB","2TB"];
  computerRam:string[] = ["2GB","4GB","8GB","16GB","32GB","64GB"];

  Lists:any = [];
  computerMode:boolean = false;
  ngOnInit(): void {
    this.getComputer()
  }

// Validition

   computerForm: FormGroup = new FormGroup({
    
    grafig : new FormControl("",[Validators.required]),
    quantity : new FormControl("",[Validators.required]),
    price : new FormControl("",[Validators.required])
   });

  // CRUD Oparetion
   
  getComputer(){
    this.computerService.getComputer().subscribe((res)=>{
     
      this.Lists =res;
      console.log(res)
    })
    
  }

  computer:ComputerModule = {
    computer_id:0,
    name:"",
    ram:"",
    rom:"",
    grafig:"",
    quantity:0,
    price:0
  }


      
  
   addComputer(){
    this.computerService.addComputer(this.computer).subscribe((res)=>{
      
      this.getComputer()
      this.reset()
    })
   }




  reset():void{
    this.computer = {
      computer_id:0,
      name:"",
      ram:"",
      rom:"",
      grafig:"",
      quantity:0,
      price:0
    }
    this.computerMode = false;
  }


  deleteComputer(id:number){

    
    const isconfirm = confirm("Are You Sure");
    if(isconfirm){
      this.computerService.deleteComputer(id).subscribe((res)=>{
        
        alert("SuccessFullty Deleted!")
        this.getComputer()
            });
    }
    

    
  }
   
  updateComputer(computerData:ComputerModule){
   
    this.computer = computerData;
    
    this.computerMode = true;
  }

  
 
}


