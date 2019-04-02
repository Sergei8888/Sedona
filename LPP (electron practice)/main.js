const path = require("path");
const url = require("url");
const {app, BrowserWindow} = require("electron");
const ipc = require('electron').ipcMain;

let win; //Program status

function createWindow(){
	win = new BrowserWindow({
		width: 320, 
		height: 300, 
		icon: __dirname + "/img/programm-icon.jpg",
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"), 
		protocol: "file:",
		slashes: true
	}));

	win.webContents.openDevTools();

	win.on("closed", () => {
		win = null;
	});
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
	app.quit();
})

// open new page
ipc.on('load-page', (event, arg) => {
	win.loadURL(arg);
});
