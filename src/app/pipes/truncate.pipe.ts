import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    //if (!value) return '';
    if (!value || value.trim() === '') return '説明なし'; // 空の場合に表示
    return value.length > limit ? value.slice(0, limit) + '…' : value;
  }
}
