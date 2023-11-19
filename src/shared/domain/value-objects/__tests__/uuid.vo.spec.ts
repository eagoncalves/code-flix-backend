import { InvalidUuidError, Uuid } from "../uuid.vo";


describe('Uuid class', () => {
  // Spy method validate.
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')
  it('should create a valid UUID when instantiated without an ID', () => {
    const uuid = new Uuid();
    expect(uuid.id).toMatch(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
    );
    // Verify if validate was called once
    expect(validateSpy).toHaveBeenCalledTimes(1)
  });

  it('should use the provided ID when instantiated with a valid ID', () => {
    const validUuid = '550e8400-e29b-41d4-a716-446655440000';
    const uuid = new Uuid(validUuid);
    expect(uuid.id).toBe(validUuid);
  });

  it('should throw InvalidUuidError when instantiated with an invalid ID', () => {
    const invalidUuid = 'invalid-uuid';
    expect(() => new Uuid(invalidUuid)).toThrow(InvalidUuidError);
  });

  it('should not throw an error when validate() is called with a valid ID', () => {
    const validUuid = '550e8400-e29b-41d4-a716-446655440000';
    const uuid = new Uuid(validUuid);
    expect(() => (uuid as any).validate()).not.toThrow(InvalidUuidError);
  });
});
