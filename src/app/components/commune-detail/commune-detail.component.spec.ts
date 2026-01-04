import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneDetailComponent } from './commune-detail.component';

describe('CommuneDetailComponent', () => {
  let component: CommuneDetailComponent;
  let fixture: ComponentFixture<CommuneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommuneDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
