import { FormatPhonePipe } from './format-phone.pipe';

describe('FormatPhonePipe', () => {

  const pipe = new FormatPhonePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Manage "" case', () => {
    const phone = '';
    const transformedPhone = pipe.transform(phone);
    expect(transformedPhone).toBe('');
  });

  it('Manage undefined case', () => {
    const phone = undefined;
    const transformedPhone = pipe.transform(phone);
    expect(transformedPhone).toBe('');
  });

  it('Manage null case', () => {
    const phone = null;
    const transformedPhone = pipe.transform(phone);
    expect(transformedPhone).toBe('');
  });

  it('Manage NaN case', () => {
    const phone = NaN;
    const transformedPhone = pipe.transform(phone as any);
    expect(transformedPhone).toBe('');
  });

  it('Manage caracters case', () => {
    const phone = '06azerty09';
    const transformedPhone = pipe.transform(phone);
    expect(transformedPhone).toBe('0609');
  });

  it('Manage separator when numbers with spaces', () => {
    const phone = '06 09 09 09 09';
    const transformedPhone = pipe.transform(phone, '.');
    expect(transformedPhone).toBe('06.09.09.09.09');
  });

  it('Manage separator when numbers with no spaces', () => {
    const phone = '0609090909';
    const transformedPhone = pipe.transform(phone, '.');
    expect(transformedPhone).toBe('06.09.09.09.09');
  });

  it('Manage separator when numbers with no spaces and prefix', () => {
    const phone = '0609090909';
    const transformedPhone = pipe.transform(phone, ' ');
    expect(transformedPhone).toBe('06 09 09 09 09');
  });

});
