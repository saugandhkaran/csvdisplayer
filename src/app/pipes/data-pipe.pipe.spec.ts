import { DataPipePipe } from './data-pipe.pipe';

describe('DataPipePipe', () => {
  it('create an instance', () => {
    const pipe = new DataPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should remove the first and last charachter of the string', () => {
    const testString = '_wow_';
    const pipe = new DataPipePipe();
    const result = pipe.transform(testString);
    expect(result).toBe('wow');
  });
  it('should return nothing if the value is nothing', () => {
    const testString = '';
    const pipe = new DataPipePipe();
    const result = pipe.transform(testString);
    expect(result).toBe('');
  });
});
