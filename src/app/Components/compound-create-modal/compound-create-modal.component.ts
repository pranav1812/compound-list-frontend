import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-create-modal',
  templateUrl: './compound-create-modal.component.html',
  styleUrls: ['./compound-create-modal.component.css'],
})
export class CompoundCreateModalComponent implements OnInit {
  ngOnInit(): void {
    console.log('newCompound', this.newCompound);
  }
  @Input() newCompound: any = {};
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  saveChanges() {
    // Logic to save changes
    console.log('saveChanges', this.newCompound);
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
