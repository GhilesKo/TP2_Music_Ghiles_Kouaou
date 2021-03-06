import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { Album } from 'src/app/Models/Album';
import { Artist } from 'src/app/Models/Artist';
import { Chanson } from 'src/app/Models/Chanson';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  CLIENT_ID: string = 'a5b1af4ae2a8460ea2995164b81286d4';
  CLIENT_SECRET: string = 'f8ea5399129140559a3008ecde0e564c';
  spotifyToken?: string;

  constructor(public http: HttpClient) {
    console.log('spotify service constructor');
  }

  UserConnexion() {
    let body = new HttpParams().set('grant_type', 'client_credentials');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET),
      }),
    };
    this.http
      .post<any>(
        'https://accounts.spotify.com/api/token',
        body.toString(),
        httpOptions
      )
      .subscribe((res) => {
        //console.log(res);
        this.spotifyToken = res.access_token;
      });
  }

  getArtist(artistName?: string): Observable<Artist> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.spotifyToken,
      }),
    };

    return this.http
      .get<any>(
        'https://api.spotify.com/v1/search?type=artist&offset=0&limit=1&q=' +
          artistName,
        httpOptions
      )
      .pipe(
        map((res) => {
          //console.log(res);
          let newArtist: Artist;
          newArtist = new Artist(
            res.artists.items[0].id,
            res.artists.items[0].name,
            res.artists.items[0].images[0].url
          );
          return newArtist;
        })
      );
  }

  getAlbums(artistId: string): Observable<Album[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.spotifyToken,
      }),
    };

    return this.http
      .get<any>(
        `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single`,
        httpOptions
      )
      .pipe(
        map((res) => {
          let listAlbum: Album[] = [];

          res.items.forEach((album: any) => {
            let newAlbum: Album = new Album(
              album.name,
              album.images[0].url,
              album.id
            );

            listAlbum.push(newAlbum);
          });

          return listAlbum;
        })
      );
  }

  getSongs(albumId: string): Observable<Chanson[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.spotifyToken,
      }),
    };

    return this.http
      .get<any>(`https://api.spotify.com/v1/albums/${albumId}`, httpOptions)
      .pipe(
        map((res) => {
          let listSongs: Chanson[] = [];
          console.log(res);
          res.tracks.items.forEach((song: any) => {
            let newSong: Chanson = new Chanson(song.name, song.id);
            listSongs.push(newSong);
          });
          return listSongs;
        })
      );
  }
}
