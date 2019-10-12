import {Component, OnInit} from '@angular/core';
import { CarService } from  './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  providers:[CarService]

})
export class AppComponent implements OnInit{

  cars = [];

  constructor(private carService: CarService){}


  ngOnInit(): void {
     this.cars = this.carService.cars;
   }


}
