import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { FirestoreService } from '../../../core/services/firestoreGeneric.service';
import { ISkill } from '../interfaces/ISkill';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends FirestoreService<ISkill> {
  private skillsCache$: Observable<ISkill[]> | null = null;
  constructor(
    firestore: AngularFirestore,
    storage: AngularFireStorage
  ) {
    super(firestore, storage);
    this.setCollection('skills');
  }

  static createWithInjector(injector: Injector): SkillService {
    const firestore = injector.get(AngularFirestore);
    const storage = injector.get(AngularFireStorage);
    return new SkillService(firestore, storage);
  }
  getAllSkills(): Observable<ISkill[]> {
    if (!this.skillsCache$) {
      this.skillsCache$ = this.getAllDocuments().pipe(
        switchMap(skills => {
          const imageRequests = skills.map(certificate => {
            return this.getFileUrl('skills', `logo_${certificate.image}.png`).pipe(
              map(url => ({ code: certificate.code, url }))
            );
          });

          return forkJoin([...imageRequests]).pipe(
            map(urls => {
              skills.forEach(certificate => {
                const imageInfo = urls.find(info => info.code === certificate.code);
                if (imageInfo) certificate.image = imageInfo.url;

              });
              return skills;
            })
          );
        })
      );
    }
    return this.skillsCache$;
  }
}
