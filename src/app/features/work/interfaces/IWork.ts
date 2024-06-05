import { SafeResourceUrl } from "@angular/platform-browser";
import { IFirestoreDocument } from "src/app/core/interfaces/IFirestoreDocument";

export interface IWork extends IFirestoreDocument {
  code: number,
  name: string,
  caption: string,
  about: string,
  tecnologies: string[],
  image: string,
  thumbnail: string,
  urlSafe: SafeResourceUrl | null,
  isWorkShop: boolean,
  youtube?: string | null,
  github?: string | null,
  playstore?: string | null,
  skillList: {
    name: string;
    url: string;
  }[];
}
