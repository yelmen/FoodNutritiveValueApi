import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {FoodModel} from '../models/foodmodel.model'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient){ }


  getFoodData(query:string):Observable<FoodModel>{
    return this.http.get<FoodModel>(environment.baseurl,{
      headers:new HttpHeaders().set(environment.XRapidAPIHostHeader, environment.XrapidApiHost)
      .set(environment.XRapidAPIKeyHeader, environment.XrapidAPIKey),
      params:new HttpParams().set('query',query)
    })
  }
}
