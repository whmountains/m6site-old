# The new awesome stack for El Refugio

## Template layer
written with JSX

## compilation layer
powered by gulp
templates are compiled ahead of time into static html
everything is minified
file watching and auto-recompiling with live reload

## Server layer
HTTP/2
SSL with a [letsencrypt.org](http://letsencrypt.org) certificate

## Client layer
static html using functional classes
tachyons.css as an external resource
index + tachyons must be under 14.5kb "critical mass"

## Service worker
linked as an async script
only loads on a supported browser
preloads other pages and resources and saves them to local storage
intercepts requests with local storage content
