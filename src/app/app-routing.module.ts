import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionAntojitosComponent } from './pages/gestion-antojitos/gestion-antojitos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gestion-antojitos' },
  {path: 'gestion-antojitos', component: GestionAntojitosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
