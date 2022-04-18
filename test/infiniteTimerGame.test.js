import infiniteTimerGame from "./infiniteTimerGame";

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('infiniteTimerGame', () => {
    test('schedules a 10-second timer after 1 second', () => {
        const callback = jest.fn()

        infiniteTimerGame(callback)

        // At this point in time, there should have been a single call to
        // setTimeout to schedule the end of the game in 1 second.
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)

        // Fast forward and exhaust only currently pending timers
        // (but not any new timers that get created during that process)
        // call inner setTimeout
        jest.runOnlyPendingTimers()
        expect(callback).toBeCalled()

        expect(setTimeout).toHaveBeenCalledTimes(2)
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
    })
})