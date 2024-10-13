import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { UserManagerComponent } from './components/admin/user-manager/user-manager.component';
import { LoginComponent } from './components/login/login/login.component';
import { AdminpageComponent } from './components/admin/adminpage/adminpage.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    UserManagerComponent,
    LoginComponent,
    AdminpageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
