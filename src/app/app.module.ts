import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Products.Component';
import { ProductService } from './product.service';
import { RatingComponent} from './rating.component';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
