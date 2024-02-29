import { Component } from '@angular/core';
import { FavoriteService } from '../favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  constructor(public favoriteService: FavoriteService) {}
}
