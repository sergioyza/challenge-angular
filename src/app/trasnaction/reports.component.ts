import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Report } from './report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {

  title :string = 'Reporte de Trasnaccciones'
  reports : Report[];
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
       this.transactionService.getReportByUserId(idUser).subscribe(
          reports => {
            this.reports = reports;
            console.log(this.reports);
        }
      );
      }
    });
  }
}
