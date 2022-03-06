import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ArtistesService } from 'src/app/Services/Artistes/artistes.service';
import { DataService } from 'src/app/Services/Spotify/data.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  constructor(public artistService: ArtistesService) {}

  ngOnInit() {}
}
