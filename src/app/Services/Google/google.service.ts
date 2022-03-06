import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const apiKey = 'AIzaSyCSBPwatZGvi2rXmPi1q-EFXmGazgZZ95w';
@Injectable({
  providedIn: 'root',
})
export class GoogleService {
  constructor(public http: HttpClient) {}

  getVideoId(titre: string): Observable<string> {
    console.log(titre);

    return this.http
      .get<any>(
        `https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&key=${apiKey}&q=${titre}`
      )
      .pipe(
        map((res: any) => {
          return res.items[0].id.videoId;
        })
      );
  }
}
