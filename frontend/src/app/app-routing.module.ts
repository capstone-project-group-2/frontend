import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CategoryComponent } from './category/category.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ReturnpolicyComponent } from './returnpolicy/returnpolicy.component';
import {PrivacypolicyComponent} from './privacypolicy/privacypolicy.component';
import {TermsconditionComponent} from './termscondition/termscondition.component';
import {OrderhistoryComponent} from './orderhistory/orderhistory.component';
import {GalleryComponent} from './gallery/gallery.component';

 

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
  {path:'wishlist',component:WishlistComponent},
  {path:'register',component:RegisterComponent},
  {path:'shop',component:ShopComponent},
  {path:'category',component:CategoryComponent},
  {path:'category/:category',component:HomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
