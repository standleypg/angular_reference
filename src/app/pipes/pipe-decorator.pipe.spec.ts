import { PipeDecoratorPipe } from './pipe-decorator.pipe';

describe('PipeDecoratorPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeDecoratorPipe();
    expect(pipe).toBeTruthy();
  });
});
