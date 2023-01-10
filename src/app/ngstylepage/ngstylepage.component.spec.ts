import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstylepageComponent } from './ngstylepage.component';

describe('NgstylepageComponent', () => {
  let component: NgstylepageComponent;
  let fixture: ComponentFixture<NgstylepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstylepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstylepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
