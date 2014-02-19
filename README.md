node-client-vs-server-timers
============================

I'm making this to familiarize myself with Node, Express, and WebSockets.

This is a simple html page that displays two timers, one coded on the client side and the other on the Express server, sent over to the client through a WebSocket. Each client receives his/her own server-side timer upon connecting; this timer lasts for the duration of the session. 

I built this in part to see the extent to which the server-side timer does or doesn't lag behind the client-side timer.

For this to work locally on your machine, you will need to have node installed. Don't forget to use this command in the project's root directory:
```
npm install
```
Then, to run the app, just enter this command:
```
node app.js
```
