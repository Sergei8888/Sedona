const path = require("path");
const url = require("url");
const {app, BrowserWindow} = require("electron");

let appState; //Program status

function createWindow(){
	appState = new BrowserWindow({
		width: 1000, 
		height: 500, 
		icon: __dirname + "/img/programm-icon.png"
	});

	window.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"), 
		protocol: "file:",
		slashes: true
	}));

	window.webContents.openDevTools();

	window.on("closed", () => {
		win = null;
	});
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
	app.quit();
})