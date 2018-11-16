const electron = require('electron')
const { app, BrowserWindow } = require('electron')


function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600 })

  win.setMenu(null)
  win.setFullScreen(true)
  win.loadFile('index.html')
}

app.on('ready', createWindow)
