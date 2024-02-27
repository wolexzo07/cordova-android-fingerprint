document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	
	var Rfin = document.getElementById("RgfingerBtn");
    Rfin.addEventListener('click', registerFprint);
	
	var fin = document.getElementById("fingerBtn");
    fin.addEventListener('click', fingerprinterW);
	
	var sfin = document.getElementById("showfingerBtn");
    sfin.addEventListener('click', showfingerprinter);
}

function fingerprinterW(){
	
	//Fingerprint.isAvailable(isAvailableSuccess, isAvailableError, optionalParams);
	Fingerprint.isAvailable(isAvailableSuccess, isAvailableError);

		function isAvailableSuccess(result) {
		  /*
		  result depends on device and os. 
		  iPhone X will return 'face' other Android or iOS devices will return 'finger' Android P+ will return 'biometric'
		  */
		  alert("Fingerprint available");
		}

		function isAvailableError(error) {
		  // 'error' will be an object with an error code and message
		  alert(error.message);
		}
}


function fingerprinter(){ // not working function
	
    Fingerprint.isAvailable(function (result) {
        if (result == "Available") {
            // Fingerprint is available, show prompt
            Fingerprint.show({
                title: 'Authentication Required', // Title of the dialog
                subtitle: 'Please authenticate', // Subtitle of the dialog (Android only)
                description: 'Touch the fingerprint sensor', // Description of the dialog
                fallbackButtonTitle: 'Use Passcode', // Fallback button text (iOS only)
                disableBackup: true // Disallow user to use backup authentication (Android only)
            }, function (success) {
                // Authentication successful
                alert('Authentication successful!');
            }, function (error) {
                // Authentication failed
                alert('Authentication failed: ' + error);
            });
        } else {
            // Fingerprint is not available
            alert('Fingerprint authentication is not available on this device.');
        }
    });
}


function showfingerprinter(){
	
    Fingerprint.show({
      description: "Some biometric description"
    }, successCallback, errorCallback);

    function successCallback(){
      alert("Authentication successful");
    }

    function errorCallback(error){
      alert("Authentication invalid " + error.message);
    }
}

function registerFprint(){
	Fingerprint.registerBiometricSecret({
      description: "Register Timboss",
      secret: "125637BiobakuIsGodson",
      invalidateOnEnrollment: true,
      disableBackup: true, // always disabled on Android
    }, successCallback, errorCallback);

    function successCallback(){
      alert("Authentication successful register");
    }

    function errorCallback(error){
      alert("Authentication invalid " + error.message);
    }
}
