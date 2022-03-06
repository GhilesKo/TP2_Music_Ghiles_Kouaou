import { Injectable } from '@angular/core';
import { Artist } from 'src/app/Models/Artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistesService {
  listArtist: Artist[] = [];

  constructor() {
    console.log('artists service constructor');
    this.listArtist = this.getArtistsLocalStorage();
  }

  addArtist(artist: Artist) {
    //add beyonce

    this.listArtist.push(artist);

    //update list with current one
    localStorage.setItem('artists', JSON.stringify(this.listArtist));
  }

  getArtistsLocalStorage() {
    var a = localStorage.getItem('artists');
    if (a != null) {
      var artists: Artist[] = JSON.parse(a);
      return artists;
    }
    return [];
  }
}
