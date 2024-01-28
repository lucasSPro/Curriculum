import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Pipe({
  name: 'typeWriterEffect'
})
export class TypeWriterEffectPipe implements PipeTransform {
  transform(text: string, delay: number): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      let index = 0;
      const intervalId = setInterval(() => {
        observer.next(text.substring(0, index + 1));
        index++;
        if (index === text.length) {
          observer.complete();
          clearInterval(intervalId);
        }
      }, delay);

      return () => {
        clearInterval(intervalId);
      };
    });
  }
}
