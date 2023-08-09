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
      } else {
        console.log('Not found locally');

        this.compoundService.getCompoundById(compoundId).subscribe(
          (data: any) => {
            this.sampleCompound = data.compound;
            console.log('Details fetched from API');
          },
          (error) => {
            console.log('Details fetch error', error);
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

  deleteCompound() {
    console.log('deleteCompound');
    const confirmDelete = confirm('Are you sure you want to delete this?');
    console.log(confirmDelete);
    // logic
  }

  sampleCompound: Compound = {} as Compound;
}
