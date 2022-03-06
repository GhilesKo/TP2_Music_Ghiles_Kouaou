import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Album } from 'src/app/Models/Album';
import { DataService } from 'src/app/Services/Spotify/data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  listAlbum: Album[] = [];
  constructor(
    private route: ActivatedRoute,
    public spotify: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAlbums();
  }

  async getAlbums() {
    var artistId = this.route.snapshot.paramMap.get('artistId');
    console.log(artistId);

    if (artistId != null) {
      await lastValueFrom(this.spotify.getAlbums(artistId))
        .then((res) => {
          this.listAlbum = res;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
