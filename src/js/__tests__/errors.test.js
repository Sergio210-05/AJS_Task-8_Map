import ErrorRepository from '../errors';

const errorsCode = [
  [0, 'Error zero'],
  [1, 'Error one'],
  [2, 'Error two'],
  [3, 'Unknown error'],
];

const handler = test.each(errorsCode);

handler('Testing error code "%s"', (code, description) => {
  const Err = new ErrorRepository();
  expect(Err.translate(code)).toBe(description);
});
