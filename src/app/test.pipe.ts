import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    const newArray = [...array];
    newArray.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      if (aValue < bValue) {
        return -1;
      } else if (aValue > bValue) {
        return 1;
      } else {
        return 0;
      }
    });
    return newArray;
  }

}
