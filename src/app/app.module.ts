import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialComponent } from './components/social/social.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/Home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SocialTarjetaComponent } from './components/social-tarjeta/social-tarjeta.component';
import { SocioComponent } from './components/socio/socio.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SocialTarjetaComponent,
    SocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
