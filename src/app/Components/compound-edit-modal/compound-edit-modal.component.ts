import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compound-edit-modal',
  templateUrl: './compound-edit-modal.component.html',
  styleUrls: ['./compound-edit-modal.component.css'],
})
export class CompoundEditModalComponent {
  @Input() editedCompound: any = {}; // The compound object being edited
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  saveChanges() {
    // Logic to save changes
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
