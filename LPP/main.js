var path = require("path");
var url = require("url");
var {app, BrowserWindow} = require("electron");
var ipc = require('electron').ipcMain;
var app = require('electron').app;

let win; //Program status

if (handleSquirrelEvent(app)) {
	// squirrel event handled and app will exit in 1000ms, so don't do anything else
	return;
}

function handleSquirrelEvent(application) {
	if (process.argv.length === 1) {
			return false;
	}

	var ChildProcess = require('child_process');

	var appFolder = path.resolve(process.execPath, '..');
	var rootAtomFolder = path.resolve(appFolder, '..');
	var updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
	var exeName = path.basename(process.execPath);

	var spawn = function(command, args) {
			let spawnedProcess, error;

			try {
					spawnedProcess = ChildProcess.spawn(command, args, {
							detached: true
					});
			} catch (error) {}

			return spawnedProcess;
	};

	var spawnUpdate = function(args) {
			return spawn(updateDotExe, args);
	};

	var squirrelEvent = process.argv[1];
	switch (squirrelEvent) {
			case '--squirrel-install':
			case '--squirrel-updated':
					// Optionally do things such as:
					// - Add your .exe to the PATH
					// - Write to the registry for things like file associations and
					//   explorer context menus

					// Install desktop and start menu shortcuts
					spawnUpdate(['--createShortcut', exeName]);

					setTimeout(application.quit, 1000);
					return true;

			case '--squirrel-uninstall':
					// Undo anything you did in the --squirrel-install and
					// --squirrel-updated handlers

					// Remove desktop and start menu shortcuts
					spawnUpdate(['--removeShortcut', exeName]);

					setTimeout(application.quit, 1000);
					return true;

			case '--squirrel-obsolete':
					// This is called on the outgoing version of your app before
					// we update to the new version - it's the opposite of
					// --squirrel-updated

					application.quit();
					return true;
	}
};

function createWindow(){
	win = new BrowserWindow({
		width: 320, 
		height: 300, 
		icon: __dirname + "/programm-icon.ico",
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"), 
		protocol: "file:",
		slashes: true
	}));

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