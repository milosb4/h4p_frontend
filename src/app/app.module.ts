import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtHelperService, JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { AuthModule } from 'angular-auth-oidc-client';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AuthGuard } from '../services/guard/auth.guard';
import { httpInterceptorProviders } from '../services/interceptors';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SlickCarouselModule,
        AuthModule.forRoot(),
    ],
    providers: [AuthGuard, httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
