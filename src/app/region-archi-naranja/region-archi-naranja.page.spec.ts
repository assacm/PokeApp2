import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegionArchiNaranjaPage } from './region-archi-naranja.page';

describe('RegionArchiNaranjaPage', () => {
  let component: RegionArchiNaranjaPage;
  let fixture: ComponentFixture<RegionArchiNaranjaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionArchiNaranjaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegionArchiNaranjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
