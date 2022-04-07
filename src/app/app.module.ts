import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { SocialComponent } from './components/social/social.component';
import { HeaderComponent } from './components/header/header.component';
import { NetworkComponent } from './components/network/network.component';
import { CardComponent } from './components/card/card.component';
import { SocialTarjetaComponent } from './components/social-tarjeta/social-tarjeta.component';
import { SocioComponent } from './components/socio/socio.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    SocialComponent,
    HeaderComponent,
    NetworkComponent,
    CardComponent,
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
