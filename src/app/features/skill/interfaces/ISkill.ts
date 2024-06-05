import { IFirestoreDocument } from "../../../core/interfaces/IFirestoreDocument";

export interface ISkill extends IFirestoreDocument  {
  code: number,
  name: string,
  acting: string,
  image: string,
  percent: number,
  profisional: boolean
}
