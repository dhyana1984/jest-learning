import timerGame from './timerGame'

/*
 * Here we enable fake timers by calling jest.useFakeTimers(). 
 * This mocks out setTimeout and other timer functions with mock functions.  
 * It is a global operation and will affect other tests within the same file
 */
jest.useFakeTimers() // should be head of jest.spyOn(global, 'setTimeout')
jest.spyOn(global, 'setTimeout')

/**
 * you need to call jest.useFakeTimers() to reset internal counters before each test. 
 * If you plan to not use fake timers in all your tests, you will want to clean up manually, 
 * as otherwise the faked timers will leak across tests:
 */
// afterEach(() => {
//     jest.useRealTimers();
// });

test('waits 1 second before ending the game', () => {
    timerGame()

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
})

test('call the callback after 1 second', () => {
    const callback = jest.fn()

    timerGame(callback)

    expect(callback).not.toBeCalled()
    jest.runAllTimers() //execute setTimeout

    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
})

test('call the call back after 1 second via advanceTimersByTime', () => {
    const callback = jest.fn()

    timerGame(callback)

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled()

    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(1000)

    // Now our callback should have been called!
    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
})