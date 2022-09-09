import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcatComponent } from './allcat/allcat.component';
import { AllorderComponent } from './allorder/allorder.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { AlluserComponent } from './alluser/alluser.component';
import { DashComponent } from './dash/dash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
   {path:'',component:LoginComponent},
   {path:'dashboard',component:DashboardComponent},
   {path:'dash',component:DashComponent},
   {path:'alluser',component:AlluserComponent},
   {path:'allproduct',component:AllproductComponent},
   {path:'allorder',component:AllorderComponent},
   {path:'allcat',component:AllcatComponent}
   
   ];

   @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GeneratorRoutingModule { }

