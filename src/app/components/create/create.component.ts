import { Component, OnInit } from '@angular/core';
import{IssueService} from '../../issue.service'

import { FormGroup,FormBuilder,Validator, Validators } from "@angular/forms";
import { from } from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
createForm:FormGroup;
  constructor(private issueService:IssueService,private fb:FormBuilder,private router:Router) { 
    this.createForm=this.fb.group({
      title:["",Validators.required],
      responnsible:'',
      description:'',
      severity:'',
      status:''
    });
  }

  ngOnInit() {
  }
addData(title,responnsible,description,severity,status){
this.issueService.addIssue(title,responnsible,description,severity,status).subscribe(()=>
{
  this.router.navigate(['/list']);
}
)
}
}
