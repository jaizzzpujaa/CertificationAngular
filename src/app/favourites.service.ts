// favorite.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  favoriteJobs: any[] = [];
}
