import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-compound-create-modal',
  templateUrl: './compound-create-modal.component.html',
  styleUrls: ['./compound-create-modal.component.css'],
})
export class CompoundCreateModalComponent implements OnInit {
  constructor(public compoundService: CompoundService) {}
  ngOnInit(): void {
    console.log('newCompound', this.newCompound);
  }
  @Input() newCompound: any = {};
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  async saveChanges() {
    // Logic to save changes
    console.log('saveChanges', this.newCompound);
    await this.compoundService.createCompound(this.newCompound);
    window.location.reload();
  }

  closeModal() {
    this.close.emit();
  }
}
