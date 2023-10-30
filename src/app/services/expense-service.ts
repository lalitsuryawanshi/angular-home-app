import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private sharedService: SharedService) { }

  // Define an array of categories
  categories: string[] = ['Auto','Entertainment', 'Food', 'Home',
                          'Medical', 'Personal', 'Savings', 'Travel', 
                          'Utilities', 'Other'];


  expenses = [
      { date: '01-Nov-2023', description: 'Asian Stores', category: 'Groceries', amount: '15.00' },
      { date: '02-Nov-2023', description: 'Burger king', category: 'Food', amount: '23.00' },
      { date: '02-Nov-2023', description: 'Maxol', category: 'Auto', amount: '99.00' },
      { date: '03-Nov-2023', description: 'Lidl Stores', category: 'Groceries', amount: '79.23' },
      { date: '03-Nov-2023', description: 'Dealz', category: 'Personal', amount: '7.99' },
  ];

  addExpense(expense: any): void {
    this.expenses.push(expense);
    this.sharedService.expensesTotal = this.getExpensesTotal(this.getExpenses());
  }

  getCategories(): string[] {
    return this.categories;
  }

  getExpenses(): any[] {
    return this.expenses;
  }

  getExpensesTotal(items: any[]): Number {
    let sum = 0;//Initial value
    for (let data of items) {
      sum+= Number(data.amount);
    }
    this.sharedService.expensesTotal = sum;
    return sum;  
  }

}
