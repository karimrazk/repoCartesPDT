import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {

  mapUrl!: SafeResourceUrl;

  provinces: string[] = [
    'Guelmim',
    'Tan-Tan',
    'Assa-Zag'
  ];

  selected: any = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    // iframe sécurisé Angular
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'province/index.html'
    );

    // écoute des messages venant de la carte
    window.addEventListener('message', (event) => {

      if (!event.data || !event.data.action) return;

      if (event.data.action === 'showRegionInfo') {
        this.selected = {
          type: 'Region',
          nomFr: event.data.nomFr,
          nomAr: event.data.nomAr,
          chefLieu: event.data.chefLieu
        };
      }

      if (event.data.action === 'showProvinceInfo') {
        this.selected = {
          type: 'Province',
          nomFr: event.data.nomFr,
          nomAr: event.data.nomAr
        };
      }
    });
  }
}
