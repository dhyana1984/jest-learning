import SoundPlayer, { mockPlaySoundFile } from "./sound-player"
import SoundPlayerConsumer from "./sound-player-consumer"

// jest.mock('./sound-player', () => {
//     return jest.fn().mockImplementation(() => {
//         return { playSoundFile: jest.fn() };
//     })
// })

jest.mock('./sound-player')

beforeEach(() => {
    SoundPlayer.mockClear()
    mockPlaySoundFile.mockClear()
})

test('We can check if the consumer called the class constructor', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer()
    expect(SoundPlayer).toHaveBeenCalledTimes(1)
})

test('We can check if the consumer called a method on the class instance', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool()
    expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
})

/*
 * Calls to jest.mock are hoisted to the top of the code. 
 * You can specify a mock later, e.g. in beforeAll(), 
 * by calling mockImplementation() (or mockImplementationOnce()) on the existing mock instead of using the factory parameter. 
 * This also allows you to change the mock between tests 
 * 
 */
describe('When SoundPlayer throws an error', () => {
    beforeAll(() => {
        SoundPlayer.mockImplementation(() => {
            return {
                playSoundFile: () => {
                    throw new Error('Test erro')
                }
            }
        })
    })

    test('Should throw an error when calling playSomethingCool', () => {
        const soundPlayerConsumer = new SoundPlayerConsumer()
        expect(() => soundPlayerConsumer.playSomethingCool()).toThrow()
    })
})