import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputerModule } from '../Model/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
private apiUrl = "http://localhost:3000/computer";

  constructor() { }


  http = inject(HttpClient);

  getComputer():Observable<ComputerModule[]>{
    return this.http.get<ComputerModule[]>(this.apiUrl);
  }

  addComputer(computer:ComputerModule):Observable<ComputerModule>{
    return this.http.post<ComputerModule >(this.apiUrl,computer);
  }

  updateComputer(computer:ComputerModule):Observable<ComputerModule>{
    return this.http.put<ComputerModule>(`${this.apiUrl}/${computer.computer_id}`,computer)

  }

  deleteComputer(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
