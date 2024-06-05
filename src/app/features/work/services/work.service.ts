import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { FirestoreService } from '../../../core/services/firestoreGeneric.service';
import { IWork } from '../interfaces/IWork';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService extends FirestoreService<IWork> {
  private worksCache$: Observable<IWork[]> | null = null;
  constructor(
    firestore: AngularFirestore,
    storage: AngularFireStorage
  ) {
    super(firestore, storage);
    this.setCollection('works');
  }

  static createWithInjector(injector: Injector): WorkService {
    const firestore = injector.get(AngularFirestore);
    const storage = injector.get(AngularFireStorage);
    return new WorkService(firestore, storage);
  }
  getAllWorks(): Observable<IWork[] > {
    if (!this.worksCache$) {
        this.worksCache$ = this.getAllDocuments().pipe(
          switchMap(works => {
            const imageRequests = works.map(work => {
              return this.getFileUrl('works', `${work.image}.png`).pipe(
                map(url => ({ code: work.code, url }))
              );
            });

            const thumbnailRequests = works.map(work => {
              return this.getFileUrl('works', `${work.thumbnail}.png`).pipe(
                map(url => ({ code: work.code, url }))
              );
            });



            return forkJoin([...imageRequests, ...thumbnailRequests]).pipe(
              map(urls => {
                works.forEach(work => {
                  const imageInfo = urls.find(info => info.code === work.code && !info.url.includes('_thumbnail'));
                  const thumbnailInfo = urls.find(info => info.code === work.code && info.url.includes('_thumbnail'));
                  if (imageInfo) work.image = imageInfo.url;
                  if (thumbnailInfo) work.thumbnail = thumbnailInfo.url;

                });
                return works;
              })
            );
          })
        );
    }

    return this.worksCache$;
  }
  getSkillUrls(skillList: string[]): Observable<any[]> {
    const skillRequests: Observable<any>[] = [];

    skillList.forEach(s => {
      const skillUrl$ = this.getFileUrl('skills', `logo_${s}.png`).pipe(
        map(url => ({ name: s, url }))
      );

      skillRequests.push(skillUrl$);
    });

    return forkJoin(skillRequests);
  }
}
