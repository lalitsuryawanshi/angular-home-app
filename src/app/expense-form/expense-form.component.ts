import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseService } from '../services/expense-service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

 expenseForm: FormGroup;
 categories: string[] = [];


  constructor(private fb: FormBuilder, private expenseService: ExpenseService,
              private sharedService: SharedService
    ) {}


  ngOnInit(): void {
    this.initForm();
    this.categories = this.expenseService.getCategories();
   
  }

  initForm(): void {
    this.expenseForm = this.fb.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
  }

  submitForm(): void {
    if (this.expenseForm.valid) {
      // Push data to your table or process it as needed
      const formData = this.expenseForm.value;
      this.expenseService.addExpense(formData);
    
      // Reset the form after submission
      this.resetForm();

    }
  }

  resetForm(): void {
    this.expenseForm.reset();
  }


}
