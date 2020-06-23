import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YeniPage } from './yeni.page';

describe('YeniPage', () => {
  let component: YeniPage;
  let fixture: ComponentFixture<YeniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YeniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
