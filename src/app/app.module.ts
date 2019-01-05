import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatMenuModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import { createComponent } from '@angular/compiler/src/core';
import { from } from 'rxjs';

import { IssueService } from './issue.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserServiceService } from './servecis/user-service.service';
// import { HttpClient } from 'selenium-webdriver/http';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'list', component: ListComponent },

  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, ListComponent, CreateComponent, EditComponent, SignUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [IssueService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
