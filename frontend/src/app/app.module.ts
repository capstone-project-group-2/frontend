import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReturnpolicyComponent } from './returnpolicy/returnpolicy.component';
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
import { GeneratorModule } from './generator/generator.module';

import { CategoryComponent } from './category/category.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,




    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    ReturnpolicyComponent,
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




    CategoryComponent,
    ViewComponent,
    CartComponent,
    PaymentComponent,
    InvoiceComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,


    // NgbModule,


    GeneratorModule,

    HttpClientModule,
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
