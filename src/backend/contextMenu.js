/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 27/06/16
 * Licence: See Readme
 */
/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
const electronContextMenu = require('electron-context-menu');

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */


/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

electronContextMenu({
	prepend: params => [{
		label: 'LibParsio'
	}]
});