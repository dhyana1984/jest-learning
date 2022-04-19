import fs from 'fs'

export const summarizeFilesInDirectorySync = (directory) => {
    return fs.readdirSync(directory).map(fileName => ({
        directory,
        fileName,
    }));
}
