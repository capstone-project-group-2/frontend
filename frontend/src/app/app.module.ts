import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReturnpolicyComponent } from './returnpolicy/returnpolicy.component';
import { CartComponent } from './cart/cart.component';
import { ShipdelComponent } from './shipdel/shipdel.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { GalleryComponent } from './gallery/gallery.component';

import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';

import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    ReturnpolicyComponent,
    CartComponent,
    ShipdelComponent,
    MyprofileComponent,
    PlaceorderComponent,
    PrivacypolicyComponent,
    TermsconditionComponent,
    OrderhistoryComponent,
    GalleryComponent,
    LoginComponent,
    WishlistComponent,
    RegisterComponent,
    ShopComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
