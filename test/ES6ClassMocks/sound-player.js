export default class SoundPlayer {
    constructor() {
        this.foo = 'bar'
    }

    /* 
     * Please note that if you use arrow functions in your classes, they will not be part of the mock. 
     * The reason for that is that arrow functions are not present on the object's prototype, 
     * they are merely properties holding a reference to a function.
     */
    playSoundFile(fileName) {
        console.log('playing sound file ' + fileName)
    }

    get foo() {
        return 'bar';
    }

    static brand() {
        return 'player-brand';
    }
}