import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';

const routes: Routes = [

  {path:"", component: CalculadoraComponent},
  {path:"convertir", component: ConvertidorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
