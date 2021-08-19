const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    //icon: `file://${__dirname}/dist/assets/logo.png`
  })

  win.loadURL(`file://${__dirname}/dist/keepOnTime/index.html`)

  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})