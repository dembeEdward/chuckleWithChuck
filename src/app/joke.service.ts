import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(environment.chuckCategoriesUrl);
  }

  getJokeFromCategory(category) {
    return this.http.get(`${environment.chuckCategoryJokeBaseUrl}${category}`);
  }
}
