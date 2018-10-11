import { app } from 'electron';
import openAboutWindow from 'electron-about-window';
import { env } from '../config';

export const menuTemplates = [{
  label: 'TweetDeck',
  submenu: [
    {
      label: 'About TweetDeck',
      click: () => openAboutWindow({
        icon_path: '../../resources/icons/512x512.png',
        copyright: '©2018 jsx.jp',
        package_json_dir: '../..',
        open_devtools: env.name !== 'production',
      }),
    }, {
      type: 'separator',
    }, {
      label: 'Quit TweetDeck',
      accelerator: 'CmdOrCtrl+Q',
      click: app.quit,
    },
  ],
}, {
  label: 'Edit',
  submenu: [
    { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
    { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
    { type: 'separator' },
    { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
    { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
    { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
    { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' },
  ],
}, {
  label: 'Color',
  submenu: [{
    label: 'Dark',
    accelerator: 'CmdOrCtrl+D',
  }, {
    label: 'Light',
    accelerator: 'CmdOrCtrl+L',
  }, {
    label: 'Pink',
    accelerator: 'CmdOrCtrl+N',
  }, {
    type: 'separator',
  }, {
    label: 'Opacity',
    accelerator: 'CmdOrCtrl+O',
  }, {
    label: 'UnOpacity',
    accelerator: 'CmdOrCtrl+U',
  }],
}, {
  label: 'View',
  submenu: [{
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: (item, focusWindow) => focusWindow && focusWindow.reload(),
  }, {
    label: 'Toggle Developer Tools',
    accelerator: (process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I'),
    click: (item, focusWindow) => focusWindow && focusWindow.webContents.toggleDevTools(),
  }, {
    type: 'separator',
  }, {
    role: 'resetzoom',
  }, {
    role: 'zoomin',
  }, {
    role: 'zoomout',
  }],
}];
