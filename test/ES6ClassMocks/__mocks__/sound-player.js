export const mockPlaySoundFile = jest.fn()

export default mock = jest.fn().mockImplementation(() => {
    return { playSoundFile: mockPlaySoundFile }
})
