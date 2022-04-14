/*
 * Repeating Setup For Many Tests
 * beforeEach and beforeAfter will run in each test
 */

const initializeCityDatabase = () => console.log('before each')
const clearCityDatabase = () => console.log('after each')
const isCity = (city) => city == 'Vienna' || city == 'San Juan'

describe('beforeEach', () => {
    beforeEach(() => {
        initializeCityDatabase()
    })

    afterEach(() => {
        clearCityDatabase()
    })

    test('city database has Vienna', () => {
        console.log('test Vienna on-time setup')
        expect(isCity('Vienna')).toBeTruthy()
    });

    test('city database has San Juan', () => {
        console.log('test San Juan')
        expect(isCity('San Juan')).toBeTruthy()
    })
})


/*
 * One-time setup
 * 
 */

const initializeCityDatabaseAsync = () => console.log('before all')
const clearCityDatabaseAsync = () => console.log('after all')

describe('before all', () => {
    beforeAll(() => {
        initializeCityDatabaseAsync()
    })

    afterAll(() => {
        clearCityDatabaseAsync()
    })

    test('city database has Vienna', () => {
        console.log('test Vienna on-time setup')
        expect(isCity('Vienna')).toBeTruthy();
    });

    test('city database has San Juan', () => {
        console.log('test San Juan on-time setup')
        expect(isCity('San Juan')).toBeTruthy();
    });
})

/**
 * Note that the top-level beforeEach is executed before the beforeEach inside the describe block
 * 
 */

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
    beforeAll(() => console.log('2 - beforeAll'));
    afterAll(() => console.log('2 - afterAll'));
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));
    test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll


/*
 * Order of execution of describe and test blocks
 */

describe('outer', () => {
    console.log('describe outer-a');

    describe('describe inner 1', () => {
        console.log('describe inner 1');
        test('test 1', () => {
            console.log('test for describe inner 1');
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer-b');

    test('test 1', () => {
        console.log('test for describe outer');
        expect(true).toEqual(true);
    });

    describe('describe inner 2', () => {
        console.log('describe inner 2');
        test('test for describe inner 2', () => {
            console.log('test for describe inner 2');
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2

/*
 * Use test.only to debug failing test
 * All tests will be skipped except this test.only one
 */
test.only('this will be the only test that runs', () => {
    expect(true).toBe(true)
})

