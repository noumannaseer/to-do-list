import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri='http://localhost:4000/issues';
  constructor(private http:HttpClient) { }
  getIssues(){
  return this.http.get(this.uri);
  }
  getIssuesById(id){
    return this.http.get(this.uri+'/'+id);
  }
  addIssue(title,responnsible,description,severity,status){
const issue={
  title:title,
  responnsible:responnsible,
  description:description,
  severity:severity,
  status:status
};
return this.http.post(this.uri+'/add',issue);
  }
  updateIssue(id, title,responnsible,description,severity,status){
    const issue={
      title:title,
      responnsible:responnsible,
      description:description,
      severity:severity,
      status:status
    };
    return this.http.post(this.uri+'/update/'+id+'',issue);
      }

      deleteIssue(id){
        return this.http.post(this.uri+'/delete/'+id+'',id);
      }
}
