export class GithubProfile {
  name: string;
  location: string;
  avatarUrl: string;
  //username
  login: string

  constructor(login: string, name: string, location: string, avatarUrl: string) {
    this.name = name;
    this.login = login;
    this.avatarUrl = avatarUrl;
    this.location = location; 
  }

}