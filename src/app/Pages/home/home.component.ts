import { Component } from '@angular/core';
import { Compound } from '../../../interfaces/compound';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showCreateModal: boolean = false;

  openCreateModal() {
    console.log('openCreateModal');
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }
  sampleCompound: Compound = {
    id: 1,
    name: 'Compound 1',
    description: 'This is the first compound',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/22/Ammonium-alum-3D-vdW.png',
  } as Compound;
  currentPage = 2;
  totalPages = 10;
}
