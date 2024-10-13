import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { AdminpageComponent } from './components/admin/adminpage/adminpage.component';
import { UserManagerComponent } from './components/admin/user-manager/user-manager.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '',
    component: AdminpageComponent,
    children: [
      {
        path: 'homepage',
        component: DashboardComponent
      },
      {
        path: 'user-manager',
        component:UserManagerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
