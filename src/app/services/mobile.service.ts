import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { MobileModule } from '../Model/mobile';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
private apiUrl = "http://localhost:3000/mobile";
  constructor() { }

  http = inject(HttpClient)


  getMobile():Observable<MobileModule>{
    return this.http.get<MobileModule>(this.apiUrl);

  }

  addMobile(mobile:MobileModule):Observable<MobileModule>{
    return this.http.post<MobileModule>(this.apiUrl,mobile);
  }

 updateMobile(mobile:MobileModule):Observable<MobileModule>{
  return this.http.put<MobileModule>(`${this.apiUrl}/${mobile.mobile_id}`,mobile)
 }
  deleteMobile(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
