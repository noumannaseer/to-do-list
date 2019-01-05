import { Component, OnInit, ViewChild } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  issues: Issue[];
  dataSource = new MatTableDataSource<Issue>(this.issues);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchData();
    this.dataSource.sort = this.sort;
  }

  fetchData() {
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      this.dataSource.paginator = this.paginator;
      console.log(this.issues);
    });
  }
  editData(id) {
    this.router.navigate(['/edit/' + id + '']);
  }
  deleteData(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchData();
    });
  }

}
export interface Issue {
  id: string;
  title: string;
  responsibile: string;
  severity: string;
  status: string;
}
