import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  //definimos como ruta raiz (primera vista visible al renderizar la pagina) 
  // a inicio component
  {
    path:"", component: InicioComponent
  },
  //las cargas perezosas renderizan un modulo completo unicamente cuando queremos acceder a ellos
  //provocando que nuestra pagina sea mas rapida porque solo cargara los componentes de ESE modulo
  //en especifico
  {
    path: "", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  }, 
  {
    path:"", loadChildren:()=>import('./modules/informacion/informacion.module').then(m=>m.InformacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
