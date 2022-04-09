
test('2 + 2 is 4', () => {
    /*
     * .toBe(4) is the matcher, toBe uses Object.is to test exact equality
     * toEqual recursively checks every field of an object or array.
     */
    expect(2 + 2).toBe(4)
})

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2
    /*
     *  toEqualis check value of an object
     */
    expect(data).toEqual({ one: 1, two: 2 })

    //wrong as toBe will check object
    // expect(data).toBe({ one: 1, two: 2 })
})

test('null', () => {
    const n = null;
    expect(n).toBeNull()
    expect(n).toBeDefined() // opposite of toBeUndefined
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

test('2 + 2', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(5)

    /*
     *  toBe and toEqual are equivalent for numbers 
     */
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    // wrong as rounding issue
    //expect(value).toBe(0.3)

    // floating number should use toBeCloseTo
    expect(value).toBeCloseTo(0.3)
})

test('array list has some value', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ]

    /*
     * using toContain to check if array has a value
     */
    expect(shoppingList).toContain('milk')
})

test('a function throw exception', () => {
    const compileAndroidCode = () => { throw new Error('you are using the wrong JDK') }

    /*
     * use toThrow to test a function throw exception
     */
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)

    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
    expect(() => compileAndroidCode()).toThrow(/JDK/)
})