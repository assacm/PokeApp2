import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegionIslasDecoloraPage } from './region-islas-decolora.page';

describe('RegionIslasDecoloraPage', () => {
  let component: RegionIslasDecoloraPage;
  let fixture: ComponentFixture<RegionIslasDecoloraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionIslasDecoloraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegionIslasDecoloraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
