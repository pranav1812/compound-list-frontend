import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CompoundService } from '../../services/compound.service';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css'],
})
export class UploadCSVComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(public copoundService: CompoundService) {}
  ngOnInit() {
    console.log('UploadCSVComponent ngInit');
  }

  reqBody: any = {};
  async saveChanges() {
    await this.copoundService.bulkUpsert(this.reqBody);
    window.location.reload();
  }

  parseCSV(event: any) {
    const file: File = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        if (result.data && result.data.length > 0) {
          const headers: any = result.data[0];
          const data = result.data.slice(1, result.data.length - 1);

          const compounds = data.map((row: any) => {
            const obj: any = {};
            headers.forEach((header: any, index: number) => {
              obj[header] = row[index];
            });
            return obj;
          });
          this.reqBody = {
            compounds: compounds.map((compound: any) => {
              return {
                id: compound.id,
                name: compound.CompoundName,
                description: compound.CompounrDescription,
                image: compound.strImageSource,
              };
            }),
          };
          console.log('reqBody', this.reqBody);
        }
      },
      error: (error) => {
        console.error('CSV Parsing Error:', error.message);
      },
    });
  }

  closeModal() {
    this.close.emit();
  }
}
