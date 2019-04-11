const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
const path = require("path");

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(6)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'lpp-win32-x64/'),
    authors: 'Sergei Kuzmenkov',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'lpp.exe',
    setupExe: 'Lpp.exe',
    setupIcon: path.join(rootPath,'programm-icon.ico')
  })
}