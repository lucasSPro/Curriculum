import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import {IFirestoreDocument} from '../interfaces/IFirestoreDocument'



@Injectable({
  providedIn: 'root'
})
export class FirestoreService<T extends IFirestoreDocument> {
  private collectionName!: string;
  private collection!: AngularFirestoreCollection<T>;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  setCollection(collectionName: string): void {
    this.collectionName = collectionName;
    this.collection = this.firestore.collection<T>(this.collectionName);
  }

  getAllDocuments(): Observable<T[]> {
    return this.collection.valueChanges();
  }

  addDocument(document: T): Promise<void> {
    return this.collection.add(document).then();
  }

  updateDocument(documentId: string, newData: Partial<T>): Promise<void> {
    return this.collection.doc<T>(documentId).update(newData).then();
  }

  deleteDocument(documentId: string): Promise<void> {
    return this.collection.doc<T>(documentId).delete().then();
  }

  addDocumentList(documents: T[]): Promise<void> {
    const batch = this.firestore.firestore.batch();

    documents.forEach(document => {
      const newDocumentRef = this.collection.ref.doc();
      batch.set(newDocumentRef, document);
    });

    return batch.commit();
  }

  uploadImage(file: File): Observable<string> {
    const filePath = `/images/${Date.now()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask: AngularFireUploadTask = this.storage.upload(filePath, file);

    return new Observable<string>((observer) => {
      uploadTask.snapshotChanges().pipe(
        finalize(async () => {
          const downloadURL: any = await fileRef.getDownloadURL();
          observer.next(downloadURL);
          observer.complete();
        })
      ).subscribe();
    });
  }

  getFileUrl(directory: string, fileName: string): Observable<string> {
    const filePath = `${directory}/${fileName}`;
    const fileRef = this.storage.ref(filePath);

    return fileRef.getDownloadURL();
  }
}
