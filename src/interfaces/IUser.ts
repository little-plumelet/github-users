export interface IUser {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  public_repos: number;
  private_repos: number;
  followers: number;
  following: number;
  name: string;
}