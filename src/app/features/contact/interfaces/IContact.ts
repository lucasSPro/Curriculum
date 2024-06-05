import { IFirestoreDocument } from "../../../core/interfaces/IFirestoreDocument";

export interface IContact extends IFirestoreDocument  {
  name: string,
  link: string,
  img: string,
  subtitle: string,
  description: string
}
