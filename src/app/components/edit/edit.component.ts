import { Component, OnInit } from "@angular/core";
import { IssueService } from "../../issue.service";

import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";
import { from } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  id: string;
  issue: any = {};
  editForm: FormGroup;
  constructor(
    private issueService: IssueService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
    this.editForm = this.fb.group({
      title: ["", Validators.required],
      responnsible: "",
      description: "",
      severity: ""
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssuesById(this.id).subscribe(res => {
        this.issue = res;
        this.editForm.get("title").setValue(this.issue.title);
        this.editForm.get("responnsible").setValue(this.issue.responnsible);
        this.editForm.get("description").setValue(this.issue.description);
        this.editForm.get("severity").setValue(this.issue.severity);
        this.editForm.get("status").setValue(this.issue.status);
      });
    });
  }
  updateData(title, responnsible, description, severity, status) {
    this.issueService
      .updateIssue(this.id, title, responnsible, description, severity, status)
      .subscribe(() => {
        this.snackbar.open("Data updated Successfully!", "Ok", {
          duration: 3000
        });
      });
  }
}
