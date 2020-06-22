import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Sumando } from './sumando';
import swal from 'sweetalert2'
@Component({
  selector: 'app-sumtrans',
  templateUrl: './sumtrans.component.html'
})
export class SumtransComponent implements OnInit {

  title :string = 'SUM TRANSACTION'
  sumando : Sumando = new Sumando();
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
      if(idUser){
       this.transactionService.getSumTransactionByUserId(idUser).subscribe(
          sumando => {

            this.sumando = sumando
            console.log(this.sumando);
        }
      );
      }
    });
  }

}
