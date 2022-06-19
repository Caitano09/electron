const electron = require('electron')
const { Tray, app, Menu } = electron

const contextMenu = Menu.buildFromTemplate ([
    {
        label: 'Sair',
        click: () => {
            app.quit()
        }
    },        

])

const ChronoTray = (iconPath, mainWindow) => {
    const tray = new Tray(iconPath)
    tray.setToolTip('Está é uma aplicação electron')
    tray.setContextMenu(contextMenu)
    tray.on('click', onClick)

    function onClick(event, bounds) {
        //coordenadas do icone da bandeja
        const { x, y } = bounds
        //dimensões da janela (largura e altura)
        const { width, height } = mainWindow.getBounds()
        if (mainWindow.isVisible()) {
            mainWindow.hide()
        } else {
            mainWindow.setBounds({
                x: x >= 400 ? x - Math.floor(width / 2) : x,
                y: y >= 300 ? y - height : y,
                width,
                height
            })
            mainWindow.show()
        }
    }
    return tray
}

module.exports = ChronoTray