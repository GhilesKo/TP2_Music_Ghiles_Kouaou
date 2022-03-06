import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Chanson } from 'src/app/Models/Chanson';
import { GoogleService } from 'src/app/Services/Google/google.service';
import { DataService } from 'src/app/Services/Spotify/data.service';

@Component({
  selector: 'app-chansons',
  templateUrl: './chansons.component.html',
  styleUrls: ['./chansons.component.css'],
})
export class ChansonsComponent implements OnInit {
  songId: string = '';
  lienYT: string = '';
  constructor(
    private route: ActivatedRoute,
    public spotify: DataService,
    public google: GoogleService
  ) {}

  listSongs: Chanson[] = [];
  ngOnInit() {
    this.getSongs();
  }

  async getSongs() {
    var albumId = this.route.snapshot.paramMap.get('albumId');
    if (albumId != null) {
      await lastValueFrom(this.spotify.getSongs(albumId))
        .then((res) => {
          this.listSongs = res;
          console.log(this.listSongs);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(albumId);
  }

  async getVideoId(songName: string) {
    await lastValueFrom(this.google.getVideoId(songName))
      .then((res) => {
        this.songId = res;
        this.lienYT = 'https://www.youtube.com/embed/' + this.songId;
        console.log(res);
        console.log(this.lienYT);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  isClicked(chanson: Chanson) {
    chanson.clicked = true;
  }
}
