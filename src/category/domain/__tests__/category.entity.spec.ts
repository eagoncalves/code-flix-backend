import { Category } from "../category.entity"

describe('Category unit tests', () => {
  test('constructor', () => {
    // We all will separate the test in AAA
    // Arrange Act Assert

    // Arrange (input)
    let category
    
    // Act (inicialize a new Category)
    category = new Category({name: 'Movie'})

    // Assert
    expect(category.category_id).toBeUndefined()
    expect(category.name).toBe('Movie')
    expect(category.description).toBeNull()
    expect(category.is_active).toBeTruthy()
    expect(category.created_at).toBeInstanceOf(Date)


    // Act
    category = new Category({ name: 'Spider', description: 'Spider man movie', is_active: false})

    // Assert
    expect(category.name).toBe('Spider')
    expect(category.description).toBe('Spider man movie')
    expect(category.is_active).toBeFalsy()
  })
})

describe('Create command', () => {
  test('should create a category', () =>{
    const category = Category.create({name: 'Movie'})
    expect(category.category_id).toBeUndefined()
    expect(category.name).toBe('Movie')
    expect(category.description).toBeNull()
    expect(category.is_active).toBeTruthy()
    expect(category.created_at).toBeInstanceOf(Date)
  })
})

describe('ChangeName command', () => {
  test('should change a name of a category', () =>{
    const category = Category.create({name: 'Movie'})
    expect(category.name).toBe('Movie')
    category.changeName('Movie2')
    expect(category.name).toBe('Movie2')
  })
})

describe('Change description command', () => {
  test('should change a description of a category', () =>{
    const category = Category.create({name: 'Movie', description: 'Movie description'})
    expect(category.description).toBe('Movie description')
    category.changeDescription('Description')
    expect(category.description).toBe('Description')
  })
})

describe('Activate command', () => {
  test('should activate a category', () =>{
    const category = Category.create({name: 'Movie', description: 'Movie description', is_active: false})
    expect(category.is_active).toBeFalsy()
    category.activate()
    expect(category.is_active).toBeTruthy()
  })
})

describe('Deactivate command', () => {
  test('should deactivate a category', () =>{
    const category = Category.create({name: 'Movie', description: 'Movie description', is_active: true})
    expect(category.is_active).toBe(true)
    category.deactivate()
    expect(category.is_active).toBe(false)
  })
})

describe('Category to Json', () => {
  test('should generate a json', () =>{
    const category = Category.create({name: 'Movie'})
    expect(category.toJSON).toBeDefined()
  })
})

