import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Transaction } from './transaction';

import swal from 'sweetalert2'

@Component({
  selector: 'app-uniquetrans',
  templateUrl: './uniquetrans.component.html'
})
export class UniquetransComponent implements OnInit {

transaction : Transaction = new Transaction();
  constructor(private transactionService: TransactionService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.uploadUserData();
  }
  uploadUserData():void{
    this.activatedRoute.params.subscribe(params=>{
      let idUser = params['idUser'];
      let idTrans = params['idTrans'];
      if(idUser && idTrans){
        this.transactionService.getTransactionByIdTransIdUser(idUser,idTrans).subscribe(
          transaction => this.transaction = transaction
        );
      }
    });
  }

}
