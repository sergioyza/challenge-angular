import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';
import { Router,ActivatedRoute } from '@angular/router';

import swal from 'sweetalert2'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  transactions : Transaction[];
  idUser:String;
  constructor(private transactionService: TransactionService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.transactionService.getTrasnactionById().subscribe(
      //transactions => this.transactions = transactions
    //);
    this.uploadUserData();
  }
  uploadUserData():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id'];
      if(id){
        this.idUser=id;
        this.transactionService.getTrasnactionByIdUser(id).subscribe(
          transactions => this.transactions = transactions
        );
      }
    });
  }

}
