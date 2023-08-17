import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpInformacionComponent } from './pop-up-informacion.component';

describe('PopUpInformacionComponent', () => {
  let component: PopUpInformacionComponent;
  let fixture: ComponentFixture<PopUpInformacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpInformacionComponent]
    });
    fixture = TestBed.createComponent(PopUpInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
