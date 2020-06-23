import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnaPage } from './ana.page';

describe('AnaPage', () => {
  let component: AnaPage;
  let fixture: ComponentFixture<AnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
