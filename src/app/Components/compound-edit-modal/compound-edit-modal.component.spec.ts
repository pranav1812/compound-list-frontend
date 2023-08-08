import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundEditModalComponent } from './compound-edit-modal.component';

describe('CompoundEditModalComponent', () => {
  let component: CompoundEditModalComponent;
  let fixture: ComponentFixture<CompoundEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundEditModalComponent]
    });
    fixture = TestBed.createComponent(CompoundEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
