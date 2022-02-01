const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // width 和 height 将设置为 web 页面的尺寸
    useContentSize: true,
    // 窗口在屏幕居中
    center:true,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile(path.resolve(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

