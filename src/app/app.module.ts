import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

//may need to pop this into a component then bring that in here
import { PublishersService } from './services/publishers.service'

import { AppComponent } from './app.component';
import { PublishersComponent } from './components/publishers/publishers.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PublishersComponent,
    HomeComponent,
    PublishersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PublishersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
