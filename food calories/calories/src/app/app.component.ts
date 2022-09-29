import { Component,OnInit } from '@angular/core';
import {ServiceService} from './services/service.service';
import {FoodModel} from './models/foodmodel.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private myservice:ServiceService){}
  declare foodmodel:FoodModel;
  enteredFood:string="pasta";

  ngOnInit():void{
    this.getFoodData(this.enteredFood);
    this.enteredFood="";
  }

  onSubmit(enteredFood:string){
    this.getFoodData(this.enteredFood);
    this.enteredFood="";

  }
  private getFoodData(enteredFood:string){
    this.myservice.getFoodData(enteredFood).subscribe({
      next:(response)=>{
        this.foodmodel=response;
        console.log(response);
      }
    });

  }

}
