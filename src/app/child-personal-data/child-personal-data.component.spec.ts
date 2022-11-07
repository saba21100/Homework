import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPersonalDataComponent } from './child-personal-data.component';

describe('ChildPersonalDataComponent', () => {
  let component: ChildPersonalDataComponent;
  let fixture: ComponentFixture<ChildPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
