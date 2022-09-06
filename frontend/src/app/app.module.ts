import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './category/category.component';
import { GeneratorModule } from './generator/generator.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WishlistComponent,
    RegisterComponent,
    ShopComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
