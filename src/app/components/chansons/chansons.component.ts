import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Chanson } from 'src/app/Models/Chanson';
import { DataService } from 'src/app/Services/Spotify/data.service';

@Component({
  selector: 'app-chansons',
  templateUrl: './chansons.component.html',
  styleUrls: ['./chansons.component.css'],
})
export class ChansonsComponent implements OnInit {
  constructor(private route: ActivatedRoute, public spotify: DataService) {}

  listSongs: Chanson[] = [];
  async ngOnInit() {
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
}
