import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ChansonsComponent } from './components/chansons/chansons.component';
import { Chanson } from './Models/Chanson';

const routes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'albums/:artistId', component: AlbumsComponent },
  { path: 'chansons/:albumId', component: ChansonsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    AlbumsComponent,
    ChansonsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
