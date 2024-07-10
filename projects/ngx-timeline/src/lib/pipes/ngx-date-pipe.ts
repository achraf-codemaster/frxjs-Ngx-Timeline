import {DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';

import {dateConfigMap, defaultSupportedLanguageCode, fieldConfigDate, NgxConfigDate, SupportedLanguageCode} from '../models';

@Pipe({
  name: 'ngxdate',
  standalone: true,
  pure: false,
})
export class NgxDatePipe implements PipeTransform {
  constructor() {
  }

  transform(date: Date | string, dateFormat?: string, langCode?: SupportedLanguageCode): string {
    let transformedDate = null;
    if (date) {
      const objDate = this.getDateConfig(langCode);
      transformedDate = new DatePipe(objDate.code).transform(new Date(date), this.dateFormat(dateFormat, objDate));
    }
    return transformedDate;
  }

  private dateFormat(dateFormat: string, configDate: NgxConfigDate): string {
    return configDate[fieldConfigDate[dateFormat]];
  }

  private getDateConfig(langCode?: SupportedLanguageCode): NgxConfigDate {
    const code: SupportedLanguageCode = langCode ?? defaultSupportedLanguageCode;
    return dateConfigMap[code];
  }
}
