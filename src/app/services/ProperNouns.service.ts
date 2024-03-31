import { Injectable } from '@angular/core';
import { URL_BASE } from '../conf/constant';
import { HttpClient } from '@angular/common/http';
import { ProperName } from '../models/ProperName';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProperNounsService extends CrudService<ProperName>{
  constructor(http: HttpClient) {
    const url: string = URL_BASE;
    super(http, `${url}/properNouns`);
  }
}
