import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CategoryComponent } from './category/category.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { GeneratorModule } from './generator/generator.module';



const routes: Routes = [

  {path:'register',component:RegisterComponent},
  {path:'shop',component:ShopComponent},
  {path:'category',component:CategoryComponent},
  {path:'category/:category',component:ShopComponent},
  {path:'login',component:LoginComponent},
  {path:'wishlist/:id',component:WishlistComponent},
  {path:'geneator',component:GeneratorModule,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
