import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component'; // Import the TodosComponent
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: '', component:AboutComponent, pathMatch: 'full' },
  { path: 'info', loadChildren: () => import('./components/info/info.module').then(m => m.InfoModule), pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
