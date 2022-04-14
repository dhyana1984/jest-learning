/**
 * Mock function
 */

describe('Mock function', () => {
    const forEach = (items, callback) => {
        for (let index = 0; index < items.length; index++) {
            callback(items[index]);
        }
    }

    test('test wich mock function', () => {
        const mockCallback = jest.fn(x => 42 + x)
        forEach([0, 1], mockCallback)

        // the mock function is called twice
        expect(mockCallback.mock.calls.length).toBe(2)

        // the first argument of the first call to the function is 0
        expect(mockCallback.mock.calls[0][0]).toBe(0)

        // the first argument of the second call to the function is 1
        expect(mockCallback.mock.calls[1][0]).toBe(1)

        // // The return value of the first call to the function was 42
        expect(mockCallback.mock.results[0].value).toBe(42)

        // The return value of the second call to the function was 43
        expect(mockCallback.mock.results[1].value).toBe(43)
    })

})

/**
 * Mock return value
 */

describe('mock return value', () => {

    test('mockReturnValueOnce1', () => {
        const myMock = jest.fn()
        myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)

        expect(myMock()).toBe(10)
        expect(myMock()).toBe('x')
        expect(myMock()).toBe(true)
    })

    test('mockReturnValueOnce2', () => {
        const filterTestFn = jest.fn();

        // Make the mock return `true` for the first call,
        // and `false` for the second call
        filterTestFn.mockReturnValueOnce(false).mockReturnValueOnce(true);

        const result = [11, 12].filter(num => filterTestFn(num));

        console.log(result);
        // > [11]
        console.log(filterTestFn.mock.calls[0][0]); // 11
        console.log(filterTestFn.mock.calls[1][0]); // 12
    })

})

/**
 * Mock partials
 */
import defaultExport, { bar, foo } from './foo-bar-baz'
jest.mock('./foo-bar-baz', () => {
    const originalModule = jest.requireActual('./foo-bar-baz')

    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => 'mocked baz'),
        foo: 'mocked foo'
    }
})
describe('Mock partial', () => {
    test('should do a partial mock', () => {
        const defaultExportResult = defaultExport()
        expect(defaultExportResult).toBe('mocked baz')
        expect(defaultExport).toHaveBeenCalled()

        expect(foo).toBe('mocked foo')
        expect(bar()).toBe('bar')
    })
})

/**
 * Mock Implementations
 */

describe('mock implementions', () => {
    test('mock implementions', () => {
        const myMockFn = jest
            .fn(() => 'default')
            .mockImplementationOnce(() => 'first call')
            .mockImplementationOnce(() => 'second call');

        expect(myMockFn()).toBe('first call')
        expect(myMockFn()).toBe('second call')
        // When the mocked function runs out of implementations defined with mockImplementationOnce
        // it will execute the default implementation set with jest.fn
        expect(myMockFn()).toBe('default')
        expect(myMockFn()).toBe('default')

    })


    test('mock return this', () => {
        const myObj = {
            myMethod: jest.fn().mockReturnThis()
        }
        // the same as
        const otherObj = {
            myMethod: jest.fn(() => this)
        }
    })
})
