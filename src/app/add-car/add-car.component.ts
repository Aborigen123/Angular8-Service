import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import {CarService} from "../car.service";


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],

})
export class AddCarComponent implements OnInit {
 nameCar: string ;



  constructor(private carService: CarService) { }

  ngOnInit() {

  }


  addCar(){
    console.log('add-car')
    this.carService.addCar(this.nameCar);

    this.nameCar = '';
  }



}
