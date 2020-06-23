import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UykuPage } from './uyku.page';

describe('UykuPage', () => {
  let component: UykuPage;
  let fixture: ComponentFixture<UykuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UykuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UykuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
