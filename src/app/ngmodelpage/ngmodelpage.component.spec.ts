import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelpageComponent } from './ngmodelpage.component';

describe('NgmodelpageComponent', () => {
  let component: NgmodelpageComponent;
  let fixture: ComponentFixture<NgmodelpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodelpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmodelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
