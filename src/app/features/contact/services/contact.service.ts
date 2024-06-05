import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { FirestoreService } from '../../../core/services/firestoreGeneric.service';
import { IContact } from '../interfaces/IContact';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends FirestoreService<IContact> {
  private contactCache$: Observable<IContact[]> | null = null;
  constructor(
    firestore: AngularFirestore,
    storage: AngularFireStorage
  ) {
    super(firestore, storage);
    this.setCollection('contacts');
  }

  static createWithInjector(injector: Injector): ContactService {
    const firestore = injector.get(AngularFirestore);
    const storage = injector.get(AngularFireStorage);
    return new ContactService(firestore, storage);
  }

  getAllContact(): Observable <IContact[]>{
    if(!this.contactCache$){
      this.contactCache$ =  this.getAllDocuments();
    }
    return this.contactCache$;
  }
}
