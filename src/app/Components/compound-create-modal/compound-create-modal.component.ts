import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compound-create-modal',
  templateUrl: './compound-create-modal.component.html',
  styleUrls: ['./compound-create-modal.component.css'],
})
export class CompoundCreateModalComponent {
  @Input() newCompound: any = {};
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  saveChanges() {
    // Logic to save changes
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
