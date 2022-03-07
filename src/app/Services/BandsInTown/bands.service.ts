import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Concert } from 'src/app/Models/Concert';

const API_KEY = '2b32475766802ac01eefda45e9e42ea0';
@Injectable({
  providedIn: 'root',
})
export class BandsService {
  constructor(public http: HttpClient) {}

  getConcerts(nomArtiste: string | null): Observable<any> {
    return this.http
      .get<any>(
        `https://rest.bandsintown.com/artists/${nomArtiste}/events?app_id=${API_KEY}`
      )
      .pipe(
        map((res: any) => {
          let listConcert: Concert[] = [];

          res.forEach((v: any) => {
            let concert: Concert;
            var coords: google.maps.LatLngLiteral = {
              lat: parseFloat(v.venue.latitude),
              lng: parseFloat(v.venue.longitude),
            };
            concert = new Concert(v.venue.name, coords);
            listConcert.push(concert);
          });

          return listConcert;
        })
      );
  }
}
