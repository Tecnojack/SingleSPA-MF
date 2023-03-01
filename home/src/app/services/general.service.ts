import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { decrypt, IndexDBService } from '@agrodatai/utilities';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  indexedDBRes: any;
  userFound: any;
  userDatabase: any;
  header = false;
  constructor(private router: Router, private agroIndex: IndexDBService) {
  }
  setHeader(header: boolean) {
    this.header = header;
  }
  getHeader() {
    return this.header;
  }
  logout() {}
  redirectTo(rute: string) {
    this.router.navigate([rute]);
  }

  setUser(user: any) {
    this.userDatabase = user;
  }
  getUser() {
    return this.userDatabase;
  }
}
