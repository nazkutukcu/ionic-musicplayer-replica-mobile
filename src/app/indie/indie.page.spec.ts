import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndiePage } from './indie.page';

describe('IndiePage', () => {
  let component: IndiePage;
  let fixture: ComponentFixture<IndiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
