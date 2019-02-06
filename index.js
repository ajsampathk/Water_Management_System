const electron = require('electron')
const { app, BrowserWindow } = require('electron')


function createWindow () {
  win = new BrowserWindow({ width: 1000, height: 800 , frame: true})

  win.setMenu(null)
  win.setFullScreen(false)
  win.loadFile('index.html')
}

app.on('ready', createWindow)
