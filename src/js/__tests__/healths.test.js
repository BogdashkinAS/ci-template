import healthInfo from '../healths';

test('info health wounded', () => {
  const count = { name: 'Маг', health: 90 };
  const result = healthInfo(count);
  expect(result).toBe('healthy');
});

test('info health wounded', () => {
  const count = { name: 'Маг', health: 25 };
  const result = healthInfo(count);
  expect(result).toBe('wounded');
});

test('info health critical', () => {
  const count = { name: 'Маг', health: 10 };
  const result = healthInfo(count);
  expect(result).toBe('critical');
});
