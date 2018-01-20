function onLoad () {
  var browser = document.getElementById("browser");

  var url = 'https://github.com/precz/wpaana';
  var urlArg = window.arguments[0].handleFlagWithParam("url", false);

  if(urlArg) {
    url = urlArg;
  }

  browser.loadURI(url, null, null);
}

addEventListener("load", onLoad, false);