import { Injectable } from '@angular/core';
import { Compound } from '../../interfaces/compound';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { rootUrl, cardsPerPage } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class CompoundService {
  private compoundListSubject: BehaviorSubject<Compound[]> =
    new BehaviorSubject<Compound[]>([]);
  compoundList$: Observable<Compound[]> =
    this.compoundListSubject.asObservable(); // $ is a convention to indicate that this is an Observable
  compoundCount: number = 0;
  totalPageCount: number = 0;

  constructor(private http: HttpClient) {
    this.getCompoundCount().then((count) => {
      this.compoundCount = count;
      this.totalPageCount = Math.ceil(count / cardsPerPage);
    });
  }

  async getCompoundCount(): Promise<number> {
    console.log('getCompoundCount called');
    const res = await this.http
      .get<any>(`${rootUrl}/compounds/getLen`)
      .toPromise();
    console.log('getCompoundCount', res.count);
    return res.count;
  }

  getCompoundList(page: number): void {
    this.http
      .get<any>(
        `${rootUrl}/compounds?offset=${
          page * cardsPerPage
        }&limit=${cardsPerPage}`
      )
      .subscribe((data) => {
        console.log('getCompoundList', data);
        this.compoundListSubject.next(data.compounds);
      });
  }

  getCompoundByIdLocally(id: number): Compound | null {
    const compounds = this.compoundListSubject.getValue();
    return compounds.find((compound) => compound.id === id) || null;
  }

  getCompoundById(id: number): Observable<any> {
    return this.http.get<any>(`${rootUrl}/compounds/${id}`);
  }

  async updateCompound(id: number, compound: Compound): Promise<any> {
    return this.http
      .put<any>(`${rootUrl}/compounds/${id}`, compound)
      .toPromise();
  }

  async createCompound(compound: Compound): Promise<any> {
    return this.http
      .post<any>(`${rootUrl}/compounds/createOne`, compound)
      .toPromise();
  }

  async bulkUpsert(compounds: Compound[]): Promise<any> {
    return this.http.post<any>(`${rootUrl}/compounds`, compounds).toPromise();
  }

  async deleteCompound(id: number): Promise<any> {
    return this.http.delete<any>(`${rootUrl}/compounds/${id}`).toPromise();
  }
}
