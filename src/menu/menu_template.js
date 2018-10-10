export const menuTemplates = [{
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
    click() {},
  }, {
    label: 'Light',
    accelerator: 'CmdOrCtrl+L',
    click() {},
  }, {
    label: 'Opacity',
    accelerator: 'CmdOrCtrl+O',
    click() {},
  }, {
    label: 'UnOpacity',
    accelerator: 'CmdOrCtrl+U',
    click() {},
  }],
}, {
  label: 'View',
  submenu: [{
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click(item, focusWindow) {
      if (!focusWindow) return;
      focusWindow.reload();
    },
  }, {
    label: 'Toggle Developer Tools',
    accelerator: (process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I'),
    click(item, focusWindow) {
      if (!focusWindow) return;
      focusWindow.webContents.toggleDevTools();
    },
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
