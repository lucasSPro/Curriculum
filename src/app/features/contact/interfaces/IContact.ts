import { IFirestoreDocument } from "../../../core/interfaces/IFirestoreDocument";


export interface IContact extends IFirestoreDocument  {
  name: string,
  link: string,
  img: any ,
  subtitle: string,
  description: string
}
