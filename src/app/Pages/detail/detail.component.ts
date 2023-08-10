import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compound } from '../../../interfaces/compound';
import { CompoundService } from '../../services/compound.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public compoundService: CompoundService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log('Details page params', params);
      const compoundId = Number(params['id']);

      const localFetch =
        this.compoundService.getCompoundByIdLocally(compoundId);
      if (localFetch) {
        this.sampleCompound = localFetch;
        this.sampleCompoundCopy = { ...this.sampleCompound };
      } else {
        console.log('Not found locally');

        this.compoundService.getCompoundById(compoundId).subscribe(
          (data: any) => {
            this.sampleCompound = data.compound;
            this.sampleCompoundCopy = { ...this.sampleCompound };
            console.log('Details fetched from API');
          },
          (error) => {
            console.log('Details fetch error', error);
            if (error.status === 404) {
              console.log('Compound not found');
              window.location.href = '/404-not-found';
            }
          }
        );
      }
    });
  }

  compoundId: number = 0;

  showEditModal: boolean = false;

  openEditModal() {
    console.log('openEditModal');
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  async deleteCompound() {
    console.log('deleteCompound');
    const confirmDelete = confirm('Are you sure you want to delete this?');
    if (confirmDelete) {
      await this.compoundService.deleteCompound(this.sampleCompound.id);
      window.location.href = '/';
    }
  }

  saveChanges(event: any) {
    console.log('saveChanges called in detail page');
    console.log(event);
    this.sampleCompound = event;
    this.sampleCompoundCopy = { ...this.sampleCompound };
  }

  sampleCompound: Compound = {} as Compound;
  sampleCompoundCopy: Compound = {} as Compound;
}
