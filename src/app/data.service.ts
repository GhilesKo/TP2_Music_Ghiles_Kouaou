import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Artist } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  CLIENT_ID:string = "a5b1af4ae2a8460ea2995164b81286d4";
   CLIENT_SECRET:string = "f8ea5399129140559a3008ecde0e564c";


  spotifyToken:string="";


    constructor(public http: HttpClient) { }




UserConnexion()
{
  let body = new HttpParams()
  .set('grant_type', 'client_credentials');

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET)
  })
};
this.http.post<any>('https://accounts.spotify.com/api/token', body.toString(), httpOptions)
  .subscribe(res => {
    console.log(res);
    this.spotifyToken = res.access_token;
  });

}

async getArtist(artistName?:string){

 let newArtist:Artist;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.spotifyToken
    })
  };



 let resultat = await lastValueFrom( this.http.get<any>('https://api.spotify.com/v1/search?type=artist&offset=0&limit=1&q=' + artistName , httpOptions));



newArtist = new Artist(resultat.artists.items[0].name,resultat.artists.items[0].images[0].url)
     // this.artist.id = resultat.artists.items[0].id;
     // this.artist.name = resultat.artists.items[0].name;
    // this.artist.image = resultat.artists.items[0].images[0].url;



return newArtist;

}

}
