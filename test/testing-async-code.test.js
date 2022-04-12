
/*
 * test callback 
 */
test('call back test', done => {
    const fetchData = (callback) => {
        callback('peanut butter')
    }

    const callback = (data) => {
        /*
         * use try to catch the exception details 
         */
        try {
            expect(data).toBe('peanut butter');
            /*
             * Jest will wait until the done callback is called before finishing the test
             * done() should not be mixed with Promises as this tends to lead to memory leaks in your tests
             */
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
})

describe('Promise test', () => {
    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 1000);
    })

    test('Return promise', () => {
        /*
         * use then callback to assert result of promise
         */
        return fetchData().then(data => {
            expect(data).toBe('peanut butter');
        });
    })

    /*
     * use resolves to assert the result of promise
     */
    test('resolves and rejects', () => {
        return expect(fetchData()).resolves.toBe('peanut butter')
    })

    /*
     *  use async/await
     */
    test('async/await', async () => {
        const data = await fetchData()
        expect(data).toBe('peanut butter')
    })

    /*
     * use async/await and resolves
     */
    test('async/await', async () => {
        await expect(fetchData()).resolves.toBe('peanut butter')
    })

})

