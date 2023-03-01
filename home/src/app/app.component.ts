import { GeneralService } from './services/general.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { decrypt, IndexDBService } from '@agrodatai/utilities';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  providers: [
    IndexDBService,
    GeneralService,
    {
      provide: 'environment',
      useValue: environment,
    },
  ],
})
export class AppComponent implements OnInit {
  userFound: any;
  name = '';
  constructor(
    private dataUser: GeneralService,
    private agroIndex: IndexDBService
  ) {}
  ngOnInit(): void {}
  title = 'security';

  getUserData = async (id: any, objectStr: string = 'ai-users') => {
    const result = await this.agroIndex.getToIndexDB(objectStr, Number(id));
    result.onsuccess = (user: any) => {
      if (user.target.result) {
        const encrypt_data = user.target.result['encrypt'];
        this.userFound = decrypt(encrypt_data, environment.INDEXDB.SECRET_KEY);
        this.dataUser.setUser(this.userFound);
        console.log(this.userFound);
      }
    };
  };
}
