import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-communes',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './communes.component.html',
  styleUrl: './communes.component.scss'
})
export class CommunesComponent implements OnInit {

  mapUrl!: SafeResourceUrl;


  selected: any = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    // iframe sécurisé Angular
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'communes/index.html'
    );

    // écoute des messages venant de la carte
    window.addEventListener('message', (event) => {

      if (!event.data || !event.data.action) return;

      if (event.data.action === 'communeInfo') {
        console.log('Commune Info received:', event.data);
        this.selected = {
          type: 'Commune',
          nomFr: event.data.nomFr,
          id: event.data.id,
        };
      }


    });
  }
}
