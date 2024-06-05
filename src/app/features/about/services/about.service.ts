import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { FirestoreService } from '../../../core/services/firestoreGeneric.service';
import { IAbout } from '../interfaces/IAbout';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService extends FirestoreService<IAbout> {
  private aboutCache$: Observable<IAbout[]> | null = null;
  constructor(
    firestore: AngularFirestore,
    storage: AngularFireStorage
  ) {
    super(firestore, storage);
    this.setCollection('about');
  }

  static createWithInjector(injector: Injector): AboutService {
    const firestore = injector.get(AngularFirestore);
    const storage = injector.get(AngularFireStorage);
    return new AboutService(firestore, storage);
  }

  getAllAbout(): Observable <IAbout[]>{
    if(!this.aboutCache$){
      this.aboutCache$ =  this.getAllDocuments();
    }
    return this.aboutCache$;
  }
}
