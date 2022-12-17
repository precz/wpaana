# [DEPRECATED] wpaana
*Web page as an native application.* 
Now most of apps has their implementation as an web pages (e.x. Spotify, Facebook, Messenger, ...). Lots of web pages works almost like apps, so why not run them as an native ones? [XKCD webcomic related](https://xkcd.com/1367/)  
This is not the first app that deliver that functionality, but I believe that it's the one that use [Firefox](https://www.mozilla.org/pl/firefox/new/) instead of [Chrome](https://www.google.pl/chrome/browser/desktop/index.html).

## Deprecated

This method of creating native applications was not working any more as #firefox stopped supporting #XUL applications. [Progressive Web Apps for Firefox](https://github.com/filips123/PWAsForFirefox) for Firefox is a better solution that should be used instead. There is no point for further development and fixing.

## Install
*Curently only Linux is supported (but it might work on macOS anyway).*
1. Install [Firefox](https://www.mozilla.org/pl/firefox/new/) browser.
1. Download this repository.
1. Place files in /opt/wpaana directory.
1. Create new app based on `wpaana-example-app.desktop`.
1. Place your `desktop` file in `~/.local/share/applications` or `/usr/share/applications` to make it avaliable for all users.

## Run
To open an web page `./wpaana.sh --url <web page url>`.

## Development
*This is an XUL application.*

### Debugg
[How to debugg XUL applications.](https://blog.cppse.nl/debugging-mozilla-xul-applications)

## Links
#### Development
[XUL Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/XUL_Reference)  
[Gnome Shell: putting your application in the desktop menus.](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)
#### Similar
[Mozilla Prism (no longer supported)](https://en.wikipedia.org/wiki/Mozilla_Prism)  
[Nativefier](https://github.com/jiahaog/nativefier)  
[Chrome apps - a website as an app](https://support.google.com/chrome_webstore/answer/3060053?hl=en)
