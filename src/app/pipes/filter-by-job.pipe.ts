import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByJob'
})
export class FilterByJobPipe implements PipeTransform {

  transform(crew: any[], job: string): any[] {
    if (!crew) return [];
    return crew.filter(member => member.job === job);
  }
}
