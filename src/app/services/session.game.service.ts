import { Injectable } from '@angular/core';
import { URL_BASE } from '../conf/constant';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud.service';
import { GameSessionStep } from '../models/GameSessionStep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGameService extends CrudService<GameSessionStep>{
  constructor(http: HttpClient) {
    const url: string = URL_BASE;
    super(http, `${url}/sessionGameData`);
  }

  //: Observable<GameSessionStep[]>
  getAllByTheme(wordTheme:number){
    return this.httpClient.get<GameSessionStep[]>(this.actionUrl + "?wordTheme=" + wordTheme);
  }

}
