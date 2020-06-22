import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Sumando }from './sumando';
import { Report }from './report'
import { of,Observable } from 'rxjs';
import { HttpClient,HttpHeaders }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private urlEndPoint: string = 'http://localhost:8080/challenge/transaction';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getTrasnaction(): Observable<Transaction[]>{
    //return of(null);
    return this.http.get<Transaction[]>(`${this.urlEndPoint}/user/1`);
  }

  createTransaction(transaction:Transaction) : Observable<Transaction>{
    return this.http.post<Transaction>(this.urlEndPoint,transaction,{headers:this.httpHeaders});
  }

  getTrasnactionByIdUser(idUser): Observable<Transaction[]>{
    //return of(null);
    return this.http.get<Transaction[]>(`${this.urlEndPoint}/user/${idUser}`);
  }

  getTransactionByIdTransIdUser(idUser,idTrans) :Observable<Transaction>{
    return this.http.get<Transaction>(`${this.urlEndPoint}/${idTrans}/user/${idUser}`);
  }

  getSumTransactionByUserId(idUser):Observable<Sumando>{
    return this.http.get<Sumando>(`${this.urlEndPoint}/user/${idUser}/sum`);
  }

  getReportByUserId(idUser):Observable<Report[]>{
    return this.http.get<Report[]>(`${this.urlEndPoint}/user/${idUser}/report`);
  }
};
