import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Shared/auth/login/login.component';
import { RegisterComponent } from './Shared/auth/register/register.component';
import { HomeComponent } from './Shared/layout/home/home.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'layout', loadChildren:()=>import('./Shared/layout/layout.module').then(m => m.LayoutModule)},
  {path:'shared', loadChildren: () => import('./Shared/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
