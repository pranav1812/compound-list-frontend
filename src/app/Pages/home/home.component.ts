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
  ) {
    console.log('Home Constructor called');
  }

  async ngOnInit() {
    // wait for 500 ms, so that constructor can finish: not a good idea though
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('Home ngOnInit called');
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params['page']) {
        if (
          Number(params['page']) < 1 ||
          Number(params['page']) > this.compoundService.totalPageCount
        ) {
          window.location.href = '/404-not-found';
        }
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
  showUploadCSVModal: boolean = false;

  openCreateModal() {
    console.log('openCreateModal');
    this.showCreateModal = true;
  }

  openUploadCSVModal() {
    console.log('openUploadCSVModal');
    this.showUploadCSVModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }

  closeUploadCSVModal() {
    this.showUploadCSVModal = false;
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
