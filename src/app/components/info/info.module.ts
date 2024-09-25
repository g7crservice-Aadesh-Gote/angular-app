import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path: '', component: InfoComponent }  // Make sure the path is set to empty for the InfoModule
];

@NgModule({
  declarations: [
    InfoComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ],
  providers: [
  ],
  exports: [
    InfoComponent 
  ]
})
export class InfoModule { }