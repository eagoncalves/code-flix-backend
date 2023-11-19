import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
  constructor(private readonly value: string){
    super();
  }
}

class ComplextValueObject extends ValueObject {
  constructor(readonly prop1: string, readonly prop2: number) {
    super();
  }
}

describe('Value object unit tests', () =>{
  test('should be equals', () => {
    const valueObject1 = new StringValueObject('test')
    const valueObject2 = new StringValueObject('test')
    expect(valueObject1.equals(valueObject2)).toBe(true)
  })

  test('complext objects should be equals', () => {
    const valueObject1 = new ComplextValueObject('test', 1)
    const valueObject2 = new ComplextValueObject('test', 1)
    expect(valueObject1.equals(valueObject2)).toBe(true)
  })

  test('complext objects shouldnt be equals', () => {
    const valueObject1 = new ComplextValueObject('test', 1)
    const valueObject2 = new ComplextValueObject('test', 2)
    expect(valueObject1.equals(valueObject2)).toBe(false)
  })

  test('the null object shouldnt be equals', () => {
    const valueObject1 = new ComplextValueObject('test', 1)
    expect(valueObject1.equals(null as any)).toBe(false)
    expect(valueObject1.equals(undefined as any)).toBe(false)
  })
})