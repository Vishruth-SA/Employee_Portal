import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalHomeComponent } from './portal-home/portal-home.component';
import { PortalRegisterComponent } from './portal-register/portal-register.component';
import { PortalListEmployeesComponent } from './portal-list-employees/portal-list-employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PortalHomeComponent,
    PortalRegisterComponent,
    PortalListEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
