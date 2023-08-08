import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundCreateModalComponent } from './compound-create-modal.component';

describe('CompoundCreateModalComponent', () => {
  let component: CompoundCreateModalComponent;
  let fixture: ComponentFixture<CompoundCreateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundCreateModalComponent]
    });
    fixture = TestBed.createComponent(CompoundCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
