const {app, screen, BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width: 204,
        height: 204,
        webPreferences:{
            nodeIntegration: true,
        },
        frame: false,
        transparent: true,
        resizable: false
    })
    win.loadFile('index.html')
    win.webContents.openDevTools({ mode: 'detach' })

    win.on('will-move', function(event, rect){
        const {width, height} = screen.getPrimaryDisplay().workAreaSize

        rect.height + rect.y > height && event.preventDefault()
        rect.width + rect.x > width && event.preventDefault()
    })
}

app
    .whenReady()
    .then(createWindow)