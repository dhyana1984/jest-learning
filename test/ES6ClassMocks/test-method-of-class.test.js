import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';

/*
 * Mocking a specific method of a class 
 */
const playSoundMock = jest.spyOn(SoundPlayer.prototype, 'playSoundFile')
    .mockImplementation(() => { console.log('mocked function') })// comment this line if just want to "spy"

const staticMethodMock = jest
    .spyOn(SoundPlayer, 'brand')
    .mockImplementation(() => 'some-mocked-brand');

const getterMethodMock = jest
    .spyOn(SoundPlayer.prototype, 'foo', 'get')
    .mockImplementation(() => 'some-mocked-result');

test('player consumer plays music', () => {
    const player = new SoundPlayerConsumer()
    player.playSomethingCool()
    expect(playSoundMock).toHaveBeenCalled()
})

test('custom methods are called', () => {
    const player = new SoundPlayer()
    const foo = player.foo
    const brand = SoundPlayer.brand()

    expect(staticMethodMock).toHaveBeenCalled()
    expect(getterMethodMock).toHaveBeenCalled()
})
