import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public http: HttpClient,public data:DataService) {}

  artistName?: string;
  titreh2?: string;
  pressed?: boolean;

 listArtist:Artist[]=[];


  albumClicked?: string;

  ngOnInit(


   ): void {

    this.data.UserConnexion();

   }

  albumArray: Album[] = [];
  chansonArray: Chanson[] = [];



    async getArtist(){

      let newArtiste = await  this.data.getArtist(this.artistName);


    this.listArtist.push(newArtiste);





    }


  toggleClick() {
    if (this.titreh2 != undefined) {
      this.pressed = true;
    }
  }
  clickedAlbum(nomalbum?: string) {
    this.albumClicked = nomalbum;
  }
}

export class Artist{

  constructor(public name:string,public image:string){}

}
class Album {
  constructor(public titre?: string, public image?: string) {}
}

class Chanson {
  constructor(public titreChanson?: string) {}
}
