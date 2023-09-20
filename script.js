//your JS code here. If required.
const browserName =navigator.appName;
const version = navigator.appVersion;
const element = document.getElementById("browser-info");
element.innerHTML = "You are using " + browserName + " version " + version;