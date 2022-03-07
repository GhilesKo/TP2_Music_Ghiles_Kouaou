import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Concert } from 'src/app/Models/Concert';
import { BandsService } from 'src/app/Services/BandsInTown/bands.service';

@Component({
  selector: 'app-Concert',
  templateUrl: './Concert.component.html',
  styleUrls: ['./Concert.component.css'],
})
export class ConcertComponent implements OnInit {
  artistname = this.route.snapshot.paramMap.get('artistName');
  center: google.maps.LatLngLiteral = { lat: 42, lng: -4 };
  listConcerts: Concert[] = [];
  constructor(
    public service: BandsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getConcerts();
  }

  async getConcerts() {
    await lastValueFrom(this.service.getConcerts(this.artistname)).then(
      (res) => {
        this.listConcerts = res;
        console.log(this.listConcerts);
      }
    );
  }
}
