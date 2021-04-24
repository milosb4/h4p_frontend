import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, SlickCarouselModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
