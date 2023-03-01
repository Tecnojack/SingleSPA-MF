import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  textSession: string = '';
  name = '';
  isLogged: boolean = false;
  userResponse: any;

  constructor(private dataUser: GeneralService) {}
 async ngOnInit(): Promise<void> {
    this.userResponse = this.dataUser.getUser();
    console.log(this.userResponse);
    if (this.userResponse) {
      this.name = this.userResponse.name;
      this.isLogged = true;
      this.textSession = 'Cerrar sesión';
    } else {
      this.textSession = 'Iniciar sesión';
    }
  }
}
