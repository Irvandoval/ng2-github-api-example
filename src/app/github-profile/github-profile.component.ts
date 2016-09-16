import { Component, OnInit } from '@angular/core';
import { GithubProfile } from  '../github-profile';
import { GitHubAPIService } from '../git-hub-api.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
  providers: [GitHubAPIService]
})
export class GithubProfileComponent implements OnInit {
  auxProfile: GithubProfile = null;
  errorMessage: string;
  username = 'irvandoval';
  charging: boolean;

  constructor(private gitHubAPIService: GitHubAPIService) {
    this.charging = false;
   }

  ngOnInit() {
  }

  findProfile(){
    this.charging = true;
    this.gitHubAPIService.getProfile(this.username)
       .subscribe(profile => {this.auxProfile = profile; this.charging = false},
                  error => {this.errorMessage = error; this.charging = false;});
  }

}
