const electronInstaller = require('electron-winstaller');
// NB: Use this syntax within an async function, Node does not have support for
//     top-level await as of Node 12.
const installer = async() => {
    try {
        await electronInstaller.createWindowsInstaller({
            appDirectory: 'C:/Users/danie/Documents/electron/terap/cronometro-win32-x64',
            outputDirectory: 'C:/Users/danie/Documents/electron/ewi/build/',
            authors: 'Daniel.',
            exe: './Cronometro.exe',
            name: 'Cronometro',
            title: 'Cronometro',
            description: 'Cronômetro é uma aplicação electron'
        });
        console.log('It worked!');
    } catch (e) {
        console.log(`No dice: ${e.message}`);
    }
}
installer()