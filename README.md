# HooBets
We wanted to create a gamified version of commons speculation on grounds over whether a test would go well, outcomes of sports, classes, etc. The site leans into students' competitive nature by allowing them to "take" tokens from each other by choosing the correct prediction.

## What it does
Administrators create events which have some sort of numerical pivot. Users then wager a certain amount of their tokens on the outcome being above or below the stated value (e.g. weather tomorrow above/below 70 degrees). Bets are distributed not only on correctness, but also according to the amount of tokens placed on each bet, so winners who were part of a minority (less likely) win a greater reward. The amount of tokens is finite, so students who gain tokens must gain them from another who loses.

# Installation
install node packages
  ```
  ...\Hoobets\frontend> npm i
  ```
install python libraries
  ```
  ...\Hoobets\backend> pip install -r requirements.txt
  ```
run the backend server
  ```
  ...\Hoobets\frontend> npm run start-api
  ```
run the frontend server
  ```
  ...\Hoobets\frontend> npm start
  ```
## Finishing an Event/Bet
run this python file
 ```
  ...\Hoobets\backend> python .\resolveevent.py
  ```
fill out the corresponding fields
 ```
  ...\Hoobets\backend> python .\resolveevent.py
  Name: event_name
  Actual: event_result
  ```
## Adding an Event/Bet
run this python file
 ```
  ...\Hoobets\backend> python .\addevent.py
  ```
fill out the corresponding fields
 ```
  ...\Hoobets\backend> python .\resolveevent.py
  name: event_name
  desc: event_desc
  creator id: admin_id
  pivot: event_pivot

  ```
