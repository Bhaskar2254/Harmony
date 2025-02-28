import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPotentialComponent } from './company-potential.component';

describe('CompanyPotentialComponent', () => {
  let component: CompanyPotentialComponent;
  let fixture: ComponentFixture<CompanyPotentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyPotentialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
