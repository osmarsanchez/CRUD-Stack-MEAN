import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

//Componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

//Routing
const routes: Routes = [
  { path: '', component: ListarProductosComponent},
  { path: 'crear-producto', component: CrearProductoComponent},
  { path: 'editar-producto/:id', component: CrearProductoComponent},
  {path: '**', redirectTo:'', pathMatch:'full'} //Importante al fiinal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
