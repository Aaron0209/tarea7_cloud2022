import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent implements OnInit {

  numC:number = 0;
  total:number = 0;
  mostrar = false;
  constructor() { }

  ngOnInit(): void {
  }

  convertirCF(){

    this.total = (this.numC*(9/5)) + 32;
    this.mostrar = true;
  }

}
