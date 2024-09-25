import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ToastrModule } from 'ngx-toastr';
import { InfoComponent } from './components/info/info.component';
import { InfoModule } from './components/info/info.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    ToastrModule.forRoot({ // ToastrModule added
      timeOut: 3000, // Toast will disappear after 3 seconds
      positionClass: 'toast-top-right', // Position of toast
      preventDuplicates: true, // Prevent duplicate toasts
    }), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
