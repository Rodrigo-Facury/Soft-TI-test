import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesDashboardComponent } from './entities-dashboard.component';

describe('EntitiesDashboardComponent', () => {
  let component: EntitiesDashboardComponent;
  let fixture: ComponentFixture<EntitiesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntitiesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
