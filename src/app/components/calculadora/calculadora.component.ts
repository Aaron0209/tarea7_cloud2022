import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  num1:number = 0;
  num2:number = 0;
  total:number = 0;
  mostrar = false;
  constructor() { }

  ngOnInit(): void {
  }

  sumar(){

    this.total = this.num1 + this.num2;
    this.mostrar = true;
  }

  resta(){

    this.total = this.num1 - this.num2;
    this.mostrar = true;
  }

  multiplicar(){

    this.total = this.num1 * this.num2;
    this.mostrar = true;
  }

  dividir(){

    this.total = this.num1 / this.num2;
    this.mostrar = true;
  }

}
