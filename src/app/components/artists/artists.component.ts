import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ArtistesService } from 'src/app/Services/Artistes/artistes.service';
import { GoogleService } from 'src/app/Services/Google/google.service';
import { DataService } from 'src/app/Services/Spotify/data.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  videoId?: string;
  constructor(
    public artistService: ArtistesService,
    public googleService: GoogleService
  ) {}

  ngOnInit() {}
}
