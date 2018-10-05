import { expect } from 'chai';
import { env } from '../config';
import { greet, bye } from './hello_world';

/* eslint-disable no-undef */
describe('hello world', () => {
  it('greets', () => {
    expect(greet()).to.equal('TweetDeck Starting...');
  });

  it('says goodbye', () => {
    expect(bye()).to.equal('See you!');
  });

  it('should load test environment variables', () => {
    expect(env.name).to.equal('test');
    expect(env.description).to.equal(
      'Add here any environment specific stuff you like.',
    );
  });

  it('babel features should work', () => {
    const a = { a: 1 };
    const b = { ...a, b: 2 };
    expect(b).to.eql({ a: 1, b: 2 });
  });
});
