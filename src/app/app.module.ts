import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ChansonsComponent } from './components/chansons/chansons.component';
import { Chanson } from './Models/Chanson';
import { SafePipe } from './Models/SafePipe';
import { ConcertComponent } from './components/concert/Concert/Concert.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'albums/:artistId', component: AlbumsComponent },
  { path: 'chansons/:albumId', component: ChansonsComponent },
  { path: 'concert/:artistName', component: ConcertComponent },
];
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    AlbumsComponent,
    ChansonsComponent,
    SafePipe,
    ConcertComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    GoogleMapsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
