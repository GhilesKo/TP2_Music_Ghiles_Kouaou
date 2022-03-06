import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './Services/Spotify/data.service';
import { Chanson } from './Models/Chanson';
import { Album } from './Models/Album';
import { Artist } from './Models/Artist';
import { lastValueFrom } from 'rxjs';
import { ArtistesService } from './Services/Artistes/artistes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    public spotify: DataService,
    public artistService: ArtistesService
  ) {}

  artistName?: string;

  ngOnInit(): void {
    this.spotify.UserConnexion();
  }

  async getArtist() {
    await lastValueFrom(this.spotify.getArtist(this.artistName))
      .then((artist) => {
        //console.log(artist);
        //add artist to storage
        this.artistService.addArtist(artist);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
