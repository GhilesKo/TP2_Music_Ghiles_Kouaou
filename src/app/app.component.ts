import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './Services/Spotify/data.service';
import { Chanson } from './Models/Chanson';
import { Album } from './Models/Album';
import { Artist } from './Models/Artist';
import { lastValueFrom } from 'rxjs';
import { ArtistesService } from './Services/Artistes/artistes.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  language: string = 'fr';
  constructor(
    public spotify: DataService,
    public artistService: ArtistesService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang(this.language);
    translate.use(this.language);
  }

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

  changeLanguage() {
    if (this.language === 'fr') {
      this.language = 'en';
    } else {
      this.language = 'fr';
    }
    this.translate.use(this.language);
  }
}
