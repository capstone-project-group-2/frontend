import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ReturnpolicyComponent } from './returnpolicy/returnpolicy.component';
import {PrivacypolicyComponent} from './privacypolicy/privacypolicy.component';
import {TermsconditionComponent} from './termscondition/termscondition.component';
import {OrderhistoryComponent} from './orderhistory/orderhistory.component';
import {GalleryComponent} from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { CategoryComponent } from './category/category.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { GeneratorModule } from './generator/generator.module';



import { ViewComponent } from './view/view.component';

 



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'returnpolicy',component:ReturnpolicyComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'placeorder',component:PlaceorderComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'termscondion',component:TermsconditionComponent},
  {path:'orderhistory',component:OrderhistoryComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'login',component:LoginComponent},

  {path:'register',component:RegisterComponent},
  {path:'shop',component:ShopComponent},
  {path:'category',component:CategoryComponent},
  {path:'wishlist/:id',component:WishlistComponent},
  {path:'geneator',component:GeneratorModule},


  {path:'category/:category',component:ShopComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'cart',component:CartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'invoice',component:InvoiceComponent},

  // {
  //   path:'',redirectTo:'home',pathMatch:'full'

  // },
  {
    path:'generator',loadChildren:()=>import('./generator/generator.module').then(m=>m.GeneratorModule)
  }

];


  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
