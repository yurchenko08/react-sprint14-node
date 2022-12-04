# sprint-10-node

## Task

Implement an http server (you can use ExpressJS) that initiates asynchronous operations when a GET request is made:
- Continuous output to the server console of the current UTC date and time at certain intervals.
- Stopping the console time output after a while and completing the server response with the return to the user a current UTC date and time.

### Acceptance criteria:

- When you connect to the server, the output to the console of the current time begins at regular intervals
- Stop output to the console after the specified time and return the current date and time to the user.
- The interval and time interval must be specified when starting the server using environment variables:
  > `$ node server.js -i [console output recurrence interval] -t [time after which the web client message will be displayed]`
- Make a video presentation with a colleague with a solution (explanation of the solution) 


### Example:
<img width="373" alt="Screenshot 2021-01-16 200827" src="https://user-images.githubusercontent.com/71768856/104819713-f9a94e00-5837-11eb-96b0-acafcd1741b1.png">
<img width="191" alt="Screenshot 2021-01-16 200421" src="https://user-images.githubusercontent.com/71768856/104819743-3d03bc80-5838-11eb-8bff-39c9232bf692.png">
