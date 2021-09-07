import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(rawPhoneNumber: string, separator: string = ''): string {
    if (!rawPhoneNumber) {
      return '';
    }
    return rawPhoneNumber
      .replace(/[^\d]/g, '')
      .match(/[\d]{2}/g)
      .join(separator);
  }

}
