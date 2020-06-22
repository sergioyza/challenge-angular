import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trasnaction',
  templateUrl: './trasnaction.component.html'
})
export class TrasnactionComponent implements OnInit {

  //listTransaction:String[] = ['uno','dos','tres'];
//transactions : Transaction[] =[
  //  {transaction_id:1,amount:123,description:'string',date:'2020-12-12',user_id:13},
    //{transaction_id:2,amount:123,description:'string',date:'2020-12-12',user_id:13},
    //{transaction_id:3,amount:123,description:'string',date:'2020-12-12',user_id:13},
    //{transaction_id:4,amount:123,description:'string',date:'2020-12-12',user_id:13}
  //];
  transactions : Transaction[];
  idUser : String;
  idTrans : String;
  constructor(private transactionService: TransactionService, private router:Router) { }

  ngOnInit(): void {
    this.transactionService.getTrasnaction().subscribe(
      transactions => this.transactions = transactions
    );
  }

  findUserList(){
    this.router.navigate([`/transactions/user/${this.idUser}`])
  }
}
