const {app, Tray, Menu, shell} = require('electron');
const path = require('path');
const server = require(path.join(__dirname, 'server.js'));

let tray = null;

function createTray() {
    tray = new Tray(path.join(__dirname, 'icon.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Open',
            click: () => {
                shell.openExternal('http://localhost:3000/client.html')
            },
        },
        {
            label: 'Exit',
            click: () => {
                //server.stop();
                app.quit();
            }
        }
    ]);
    tray.setToolTip('My Application');
    tray.setContextMenu(contextMenu);
}

app.whenReady().then(() => {
    createTray();
    server.start();
});
