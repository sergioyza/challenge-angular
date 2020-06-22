import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

 transaction = new Transaction();
 titulo  ="Transaction";

  constructor(private transactionService: TransactionService, private router:Router) { }

  ngOnInit(): void {
  }

  public created():void{

    this.transactionService.createTransaction(this.transaction).subscribe(trasnaction => {
        this.router.navigate([`/transactions/user/${trasnaction.user_id}`])
        swal.fire('Saved',`Amount: ${trasnaction.amount}`)
      }
    );
  }
}
