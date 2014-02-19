node-client-vs-server-timers
============================

Deployed live on Heroku at http://two-timers.herokuapp.com/.

I made this to familiarize myself with Node, Express, and WebSockets, and to see how well server-side JS sent to the client through a WebSocket performs against client-side JS.

This is a simple html page that displays two timers, one coded on the client and the other on the Express server. Each client receives his/her own server-side timer upon connecting; this timer lasts for the duration of the session.
