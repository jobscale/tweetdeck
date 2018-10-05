import './stylesheets/main.css';

// Small helpers you might want to keep
import './helpers/context_menu';
import './helpers/external_links';

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from 'electron';
import jetpack from 'fs-jetpack';
import { env } from './config';
import { greet } from './hello_world/hello_world';

const { app } = remote;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read('package.json', 'json');

const osMap = {
  win32: 'Windows',
  darwin: 'macOS',
  linux: 'Linux',
};

document.querySelector('#app').style.display = 'block';
document.querySelector('#greet').innerHTML = greet();
document.querySelector('#os').innerHTML = osMap[process.platform];
document.querySelector('#author').innerHTML = manifest.author;
document.querySelector('#env').innerHTML = env.name;
document.querySelector('#electron-version').innerHTML = process.versions.electron;
class App {
  constructor() {
    this.run.run = () => {
      /* eslint-disable */
      location.href = 'https://tweetdeck.twitter.com'; /* eslint-enable */
    };
  }

  run() {
    fetch('https://tweetdeck.twitter.com')
    .then(res => res.text())
    .then(body => document.body.outerHTML = body);
  }
}
const main = new App();
main.run.run();
