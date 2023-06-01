const { commentCounter } = require('./commentCounter.js');

describe('commentCounter', () => {
  test('returns 0 for an empty list', () => {
    const list = document.createElement('ul');
    expect(commentCounter(list)).toBe(0);
  });

  test('returns the correct count for a list with items', () => {
    const list = document.createElement('ul');
    list.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li>';
    expect(commentCounter(list.children)).toBe(4);
  });

  test('returns 0 if the list is null or undefined', () => {
    expect(commentCounter(null)).toBe(0);
    expect(commentCounter(undefined)).toBe(0);
  });
});
