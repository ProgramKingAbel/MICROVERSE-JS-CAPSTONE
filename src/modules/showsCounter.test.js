/**
 * @jest-environment jsdom
 */
import allShows from './showsCounter.js';

beforeEach(() => {
  document.body.innerHTML = '<span class=\'total\'></span>';
});
afterEach(() => {
  document.body.innerHTML = '';
});

describe('Test Counter operations', () => {
  test('add one item', () => {
    const data = [{ id: 1, name: 'Show 1' }, { id: 2, name: 'Show 2' }, { id: 3, name: 'Show 3' }];
    allShows(data);
    const container = document.querySelector('.total');
    expect(container.innerHTML).toBe('3');
  });
});
