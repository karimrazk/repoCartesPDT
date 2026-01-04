import { Component, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { PROVINCE_GUELMIM } from '../../constants/app.constants';

@Component({
  selector: 'app-commune-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './commune-detail.component.html',
  styleUrl: './commune-detail.component.scss'
})

export class CommuneDetailComponent {

  activeTab: 'emploi' | 'education' | 'sante' | 'eau' | 'manu' = 'emploi';

  mapUrl!: SafeResourceUrl;
  selected: any = null;
  provinceData: any = null;
  province = PROVINCE_GUELMIM;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dataService: DataServiceService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID commune:', id);

    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'communes/index.html'
    );

    // Charger la province
    this.dataService.getProvince(this.province).subscribe({
      next: data => {
        this.provinceData = data;
        console.log('Province chargée:', data);
      },
      error: err => console.error(err)
    });
  }

  setActiveTab(tab: any) {
    this.activeTab = tab;
  }

}

