import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { FirestoreService } from '../../../core/services/firestoreGeneric.service';
import { ICertificate } from '../interfaces/ICertificate';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService extends FirestoreService<ICertificate> {
  private certificatesCache$: Observable<ICertificate[]> | null = null;
  constructor(
    firestore: AngularFirestore,
    storage: AngularFireStorage
  ) {
    super(firestore, storage);
    this.setCollection('certificates');
  }

  static createWithInjector(injector: Injector): CertificateService {
    const firestore = injector.get(AngularFirestore);
    const storage = injector.get(AngularFireStorage);
    return new CertificateService(firestore, storage);
  }
  getAllCertificates(): Observable<ICertificate[]> {
    if (!this.certificatesCache$) {
      this.certificatesCache$ = this.getAllDocuments().pipe(
        switchMap(certificates => {

          const imageRequests = certificates.map(certificate => {
            return this.getFileUrl('certificates', `${certificate.image}.png`).pipe(
              map(url => ({ code: certificate.code, url }))
            );
          });

          const thumbnailRequests = certificates.map(certificate => {
            return this.getFileUrl('certificates', `${certificate.thumbnail}.png`).pipe(
              map(url => ({ code: certificate.code, url }))
            );
          });

          return forkJoin([...imageRequests, ...thumbnailRequests]).pipe(
            map(urls => {
              certificates.forEach(certificate => {
                const imageInfo = urls.find(info => info.code === certificate.code && !info.url.includes('_thumbnail'));
                const thumbnailInfo = urls.find(info => info.code === certificate.code && info.url.includes('_thumbnail'));
                if (imageInfo) certificate.image = imageInfo.url;
                if (thumbnailInfo) certificate.thumbnail = thumbnailInfo.url;
              });
              return certificates;
            })
          );
        })
      );
    }
    return this.certificatesCache$;
  }
}
