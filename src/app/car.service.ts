import {ConsoleService} from "./out-car/console.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CarService {

  constructor(private consoleService: ConsoleService){}

  cars=[
    {name: 'Ford', status: false},
    {name: 'Audi', status: true},
    {name: 'BMW', status: true},
  ];

  addCar(name: string){
    this.cars.push({
      name,//typescript зрозуміє що це name: name
      status: true
    });
    this.consoleService.log(`$Car ${name} was add`);
  }
}
