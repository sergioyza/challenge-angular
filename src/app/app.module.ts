import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrasnactionComponent } from './trasnaction/trasnaction.component';
import { TransactionService } from './trasnaction/transaction.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './trasnaction/form.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './trasnaction/user.component';
import { UniquetransComponent } from './trasnaction/uniquetrans.component';
import { SumtransComponent } from './trasnaction/sumtrans.component';
import { ReportsComponent } from './trasnaction/reports.component';


const routes: Routes = [

	{path:'transactions',component:TrasnactionComponent},
	{path:'transactions/form',component:FormComponent},
	{path:'transactions/user/:id',component:UserComponent},
	{path:'transactions/:idTrans/user/:idUser',component:UniquetransComponent},
	{path:'transactions/user/:idUser/sum',component:SumtransComponent},
	{path:'transactions/user/:idUser/report',component:ReportsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrasnactionComponent,
    FormComponent,
    UserComponent,
    UniquetransComponent,
    SumtransComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
		FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
