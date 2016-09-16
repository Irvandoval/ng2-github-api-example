import { Injectable } from '@angular/core';
import { GithubProfile } from './github-profile';
import { Http, Response } from '@angular/http';
import { Observable }  from 'rxjs/Observable';

@Injectable()
export class GitHubAPIService {
  
 constructor (private http: Http) {}

  private  GITHUB_API_URL = 'https://api.github.com/users/';

  getProfile(username:string) : Observable<GithubProfile>{
   return this.http.get(this.GITHUB_API_URL + username)
          .map(this.extractData)
          .catch(this.handleError);
 }

 private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
