import { isEqual } from "lodash";
export abstract class ValueObject {
  public equals(vo: this): boolean {
    if (vo === null || vo === undefined) {
      return false;
    } 

    // Verifying class names
    if (vo.constructor.name !== this.constructor.name) {
      return false;
    }

    return isEqual(vo, this);

  }
}