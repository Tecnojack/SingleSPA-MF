import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexDBService } from '@agrodatai/utilities';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [
    IndexDBService,
    {
      provide: 'environment',
      useValue: environment,
    },
  ],
})
export class AppComponent implements OnInit {
  title = 'security';
  user: any = { id: 1, name: 'Jackson Palacios', password: 'test' };
  constructor(private agroIndex: IndexDBService) {}
  ngOnInit(): void {}
  iniciarSesion() {
    this.agroIndex.saveInIndexDB(this.user, 'ai-users');
  }
}
