import { IFirestoreDocument } from "../../../core/interfaces/IFirestoreDocument";

export interface ICertificate extends IFirestoreDocument  {
  code: number,
  name: string,
  caption: string,
  issuer: string,
  image: string,
  thumbnail: string,
  year: number,
  workload: number,
}
