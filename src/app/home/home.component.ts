import { Component, OnChanges, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ExpenseService } from '../services/expense-service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, AfterViewInit {

  expenses: any[] = [];
  expensesTotal: any = 0;

  constructor(private expenseService: ExpenseService, private sharedService: SharedService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('Home Component initialized.');
    this.expenses = this.expenseService.getExpenses();
    this.expensesTotal = this.expenseService.getExpensesTotal(this.expenses);
  }

  ngOnChanges() {
    console.log('Home Component changed.');
    this.expenses = this.expenseService.getExpenses();
    this.expensesTotal = this.expenseService.getExpensesTotal(this.expenses);
  }
  
  ngAfterViewInit(){
    this.expenses = this.expenseService.getExpenses();
    this.expensesTotal = this.expenseService.getExpensesTotal(this.expenses);
    this.cd.detectChanges();
  }



  calculateTotal() {

    var tot = '0';

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,      
      maximumFractionDigits: 2,
    });

    this.expenses = this.expenseService.getExpenses();
    var total = this.expenseService.getExpensesTotal(this.expenses);
    return total.toString();
  }
}
