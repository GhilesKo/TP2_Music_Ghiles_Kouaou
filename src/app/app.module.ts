import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot([
    {path: '', redirectTo: '/artists', pathMatch: 'full'}, { path: 'artists', component: Component }




  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
