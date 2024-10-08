import { Uuid } from "../../shared/domain/value-objects/uuid.vo";
import { CategoryValidatorFactory } from "./category.validator";

export type CategoryConstructorProps = {
  id?: Uuid;
  name: string;
  description?: string | null;
  is_active?: boolean;
  created_at?: Date;
}

export type CategoryCreateCommand = {
  name: string;
  description?: string | null;
  is_active?: boolean;
}

export class Category {
  id: Uuid;
  name: string;
  description: string | null;
  is_active: boolean;
  created_at: Date;

  constructor(props: CategoryConstructorProps) {
    this.id = props.id ?? new Uuid();
    this.name = props.name;
    this.description = props.description ?? null;
    this.is_active = props.is_active ?? true;
    this.created_at = props.created_at ?? new Date();
  }

  // This is a factory method to create a new category
  static create(props: CategoryCreateCommand): Category {
    const category = new Category(props);
    Category.validate(category);
    return category;
  }
 
  changeName(name: string):void {
    this.name = name;
    Category.validate(this);
  }

  changeDescription(description: string):void {
    this.description = description;
    Category.validate(this);
  }

  activate(){
    this.is_active = true;
  }

  deactivate(){
    this.is_active = false;
  }

  static validate(entity: Category) {
    return CategoryValidatorFactory.create().validate(entity);
  }

  toJSON(){
    return {
      category_id: this.id,
      name: this.name,
      description: this.description,
      is_active: this.is_active,
      created_at: this.created_at,
    }
  }
}