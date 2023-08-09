import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compound } from '../../../interfaces/compound';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public compoundService: CompoundService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params['page']) {
        this.currentPage = Number(params['page']);
        this.compoundService.getCompoundList(params['page'] - 1);
        console.log(
          'ngOnInit logging list',
          this.compoundService.compoundList$
        );
      } else {
        this.currentPage = 1;
        this.compoundService.getCompoundList(0);
        console.log(
          'ngOnInit logging list',
          this.compoundService.compoundList$
        );
      }
    });
    console.log('ngOnInit', this.currentPage);
  }

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
