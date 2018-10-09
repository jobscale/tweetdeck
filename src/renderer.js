// This is main process of Electron, started as first thing when your
// app starts. It runs through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import path from 'path';
import url from 'url';
import { app, Menu } from 'electron';
import { menuTemplates } from './menu/edit_menu_template';
import { devMenuTemplate } from './menu/dev_menu_template';
import createWindow from './helpers/window';

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import { env } from './config';

class Daemon {
  constructor() {
    setTimeout(() => this.first(), 5000);
  }

  first() {
    const cmd = `
    document.head.appendChild(document.createElement("style"))
    .innerText = "html{background-color:black;color:white;}body{opacity:0.8;background-color:aliceblue;color:dimgray;}";
    `;
    this.executeJavaScript(cmd, this.win.webContents)
    .then(result => result);
  }

  promise() {
    const promise = {};
    promise.instance = new Promise((resolve, reject) => {
      promise.resolve = resolve;
      promise.reject = reject;
    });
    return promise;
  }

  executeJavaScript(cmd, webContents) {
    const promise = this.promise();
    webContents.executeJavaScript(cmd, promise.resolve);
    return promise.instance;
  }

  light(webContents) {
    const cmd = `
    document.head.appendChild(document.createElement("style"))
    .innerText = "section *, .app-columns-container, .column-header{background-color:white;color:black;}";
    `;
    this.executeJavaScript(cmd, webContents)
    .then(result => result);
  }

  dark(webContents) {
    const cmd = `
    document.head.appendChild(document.createElement("style"))
    .innerText = "section *, .app-columns-container, .column-header{background-color:black;color:white;}";
    `;
    this.executeJavaScript(cmd, webContents)
    .then(result => result);
  }

  generateMenu() {
    menuTemplates[1].submenu[0]
    .click = (item, focusWindow) => focusWindow && this.dark(focusWindow.webContents);
    menuTemplates[1].submenu[1]
    .click = (item, focusWindow) => focusWindow && this.light(focusWindow.webContents);
  }

  setApplicationMenu() {
    const menus = [...menuTemplates];
    this.generateMenu();
    if (env.name !== 'production') {
      menus.push(devMenuTemplate);
    }
    Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
  }

  createWindow() {
    this.win = createWindow('main', {
      width: 1000,
      height: 1400,
    });
    this.win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
    if (env.name === 'development') {
      this.win.openDevTools();
    }
  }
}

// Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.
if (env.name !== 'production') {
  const userDataPath = app.getPath('userData');
  app.setPath('userData', `${userDataPath} (${env.name})`);
}

app.on('ready', () => {
  const daemon = new Daemon();
  daemon.setApplicationMenu();
  daemon.createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});
