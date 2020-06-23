import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HiphopPage } from './hiphop.page';

describe('HiphopPage', () => {
  let component: HiphopPage;
  let fixture: ComponentFixture<HiphopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiphopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HiphopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
