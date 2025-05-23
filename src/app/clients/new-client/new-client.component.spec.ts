import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientComponent } from './new-client.component';

describe('NewClientComponent', () => {
  let component: NewClientComponent;
  let fixture: ComponentFixture<NewClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});