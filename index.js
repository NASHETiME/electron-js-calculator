const electron = require('electron');
const url = require('url');
const path = require('path');
const ipc = electron.ipcMain;

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
	// Create new window
	mainWindow = new BrowserWindow({
		frame: false,
		width: 255,
		height: 492,
		webPreferences:{
			nodeIntegration:true
		}
	})

	// Load html file
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))
})