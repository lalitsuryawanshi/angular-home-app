import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSplitModule } from 'angular-split';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FieldSumPipe } from './utils/sum-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExpenseFormComponent,
    FieldSumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule,
    AngularSplitModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
