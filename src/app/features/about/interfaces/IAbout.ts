import { IFirestoreDocument } from "../../../core/interfaces/IFirestoreDocument";

export interface IAbout extends IFirestoreDocument  {
  strong: string,
  p: string,
  text: string,
  theme: string,
  code: number,
}
