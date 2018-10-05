import { expect } from 'chai';
import testUtils from './utils';

/* eslint-disable no-undef */
describe('application launch', () => {
  beforeEach(testUtils.beforeEach);
  afterEach(testUtils.afterEach);

  it('shows hello world text on screen after launch', () => this.app.client.getText('#greet')
  .then(text => {
    expect(text).to.equal('Hello World!');
  }));
});
