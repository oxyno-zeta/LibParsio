/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 26/06/16
 * Licence: See Readme
 */
/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
const electron = require('electron');
const ipc = electron.ipcMain;
const app = electron.app;

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */


/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */


/* ************************************* */
/* ********        EVENTS       ******** */
/* ************************************* */

ipc.on('get-app-version', function (event) {
	event.sender.send('got-app-version', app.getVersion());
});

