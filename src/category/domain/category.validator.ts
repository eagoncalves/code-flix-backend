import { MaxLength, isBoolean, isString, isNotEmpty, IsOptional } from 'class-validator'
import { Category } from './category.entity';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';

class CategoryRules {

    @MaxLength(255)
    @isString()
    @isNotEmpty()
    @MaxLength(255)
    name: string;

    @MaxLength(255)
    @isString()
    @IsOptional()
    description: string | null;

    @isNotEmpty()
    @isBoolean()
    is_active: boolean

    constructor({ name, description, is_active }: Category ) {
        Object.assign(this, { name, description, is_active });
    }
}

export class CategoryValidator extends ClassValidatorFields<CategoryRules> {
    validate(entity:Category) {
        return super.validate(new CategoryRules(entity));
    } 
}

export class CategoryValidatorFactory {
    static create() {
        return new CategoryValidator();
    }
}