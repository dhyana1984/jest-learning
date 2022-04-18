
export default timerGame = (callback) => {
    console.log('Ready...Go!')
    setTimeout(() => {
        console.log("Time's up -- stop!")
        callback && callback()
    }, 1000)
}
