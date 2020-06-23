import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JazzPage } from './jazz.page';

describe('JazzPage', () => {
  let component: JazzPage;
  let fixture: ComponentFixture<JazzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JazzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JazzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
