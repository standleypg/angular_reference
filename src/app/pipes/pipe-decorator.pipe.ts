import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDecorator',
})
export class PipeDecoratorPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    return `hello ${value}`;
  }
}
