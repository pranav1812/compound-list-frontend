import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-compound-edit-modal',
  templateUrl: './compound-edit-modal.component.html',
  styleUrls: ['./compound-edit-modal.component.css'],
})
export class CompoundEditModalComponent {
  @Input() editedCompound: any = {}; // The compound object being edited
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  // Output the editedCompound object to the parent component
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  constructor(public compoundService: CompoundService) {}

  async saveChanges() {
    console.log('saveChanges called in edit modal');
    // Logic to save changes
    await this.compoundService.updateCompound(
      this.editedCompound.id,
      this.editedCompound
    );
    this.save.emit(this.editedCompound);
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
