import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneratorRoutingModule } from './generator-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashComponent } from './dash/dash.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { AlluserComponent } from './alluser/alluser.component';
import { AllcatComponent } from './allcat/allcat.component';
import { AllorderComponent } from './allorder/allorder.component';





@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    DashComponent,
    AllproductComponent,
    AlluserComponent,
    AllcatComponent,
    AllorderComponent
  ],
  imports: [
    CommonModule,
    GeneratorRoutingModule,
    ReactiveFormsModule
  ]
})
export class GeneratorModule { 

}
