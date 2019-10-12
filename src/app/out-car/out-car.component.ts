import { Component, OnInit, Output, Input } from '@angular/core';
import { ConsoleService } from './console.service';



@Component({
  selector: 'app-out-car',
  templateUrl: './out-car.component.html',
  styleUrls: ['./out-car.component.css'],
  providers: [ConsoleService]
})
export class OutCarComponent implements OnInit {

@Input() car:{name: string, status: boolean};
  constructor(private service: ConsoleService) { } // КОМПОНЕНТ ОБОВЯЗКОВО РЕЄСТРУВАТИ. В цьому ж класі в @Component додати поле  providers: [ConsoleService]

  changeStatusCar(){
  this.car.status = !this.car.status;
  console.log(`${this.car.name} was changet`)
  }
  //second

  onAction(type: string){
    this.car.status = type ==='buy' ? false : true;
   // const service = new ConsoleService; ТАК РОБИТИ НЕ МОЖНА
  ///  service.log(`${this.car.name} was changet = ${type}`)
  this.service.log(`${this.car.name} was changet = ${type}`)
  }


  getClass(){
    return{
    'list-group-item-success' : this.car.status,
    'list-group-item-danger' : !this.car.status,
    'list-group-item' : true
    }
  }
  ngOnInit() {

  }



}
