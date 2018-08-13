console.log('Hello from Jest!');

describe('Jest', ()=> {
  it('can run tests', () => {
    console.log('Hello from Jest!');
  });

  describe('expect', () => {
    it('can check truthy-ness', () => {
      expect(0).toBeFalsy();
      expect(1).toBeTruthy();

      expect('').toBeFalsy();
      expect('false').toBeTruthy();
    });
  });
});