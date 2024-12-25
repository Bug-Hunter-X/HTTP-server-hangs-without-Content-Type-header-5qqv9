# Node.js HTTP Server Hanging Issue

This repository demonstrates a subtle bug in a Node.js HTTP server where omitting the `Content-Type` header in the response can lead to the server hanging.  The issue arises because the browser or client might be waiting indefinitely for additional data, failing to close the connection.

## Bug Description
The provided `bug.js` file shows a simple HTTP server that returns 'Hello World!' but omits the crucial `Content-Type` header.  Running this server will result in a connection that remains open and the server process will likely become unresponsive.

## Solution
The `bugSolution.js` demonstrates the correct way to address this problem, explicitly setting the `Content-Type` header before sending the response.