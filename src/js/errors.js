export default class ErrorRepository {
  constructor() {
    this.ErrorCode = new Map([
      [0, 'Error zero'],
      [1, 'Error one'],
      [2, 'Error two'],
    ]);
  }

  translate(code) {
    if (this.ErrorCode.has(code)) {
      return this.ErrorCode.get(code);
    }
    return 'Unknown error';
  }
}
