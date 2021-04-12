function DownloadingFile( filename ) {

	SetStatusChanged( "Downloading '" + filename + "'" );

}
function SetStatusChanged( status ) {
	document.getElementById("downloads").textContent = status + "...";
}

/*For testing in a browser */
if ( window.webkitRTCPeerConnection ) {
	DownloadingFile('Addon #101');
	
}
// Credit outputted to console, if you need to, remove it.
console.log("Comfort Load");
console.log("Created by Colonel Pickels");