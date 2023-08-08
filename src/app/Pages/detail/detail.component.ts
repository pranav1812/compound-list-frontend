import { Component } from '@angular/core';
import { Compound } from '../../../interfaces/compound';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  showEditModal: boolean = false;

  openEditModal() {
    console.log('openEditModal');
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  deleteCompound() {
    console.log('deleteCompound');
    const confirmDelete = confirm('Are you sure you want to delete this?');
    console.log(confirmDelete);
    // logic
  }

  sampleCompound: Compound = {
    id: 1,
    name: 'Compound 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/22/Ammonium-alum-3D-vdW.png',
  } as Compound;
}
