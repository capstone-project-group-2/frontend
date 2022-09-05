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
import { CartComponent } from './cart/cart.component';
import { ShipdelComponent } from './shipdel/shipdel.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { GalleryComponent } from './gallery/gallery.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
