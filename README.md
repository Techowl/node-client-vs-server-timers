node-client-vs-server-timers
============================

I'm making this just to familiarize myself with Node and WebSockets.

This will be a simple html page that displays two timers and one button. The button will be to start or stop the timers (both at the same time), while one timer will be coded on the client side and the other will be on the Node server, sent over to the client through a WebSocket. I'd like to see the extent to which the server-side timer does or doesn't lag behind the client-side timer.

For this to work locally on your machine, you will need to have node installed. Don't forget to use this command in the project's root directory:
```
npm install
```
