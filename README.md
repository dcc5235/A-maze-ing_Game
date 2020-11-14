# Maze Game ![GitHub version doc](https://img.shields.io/badge/Version-1.0.0-red) ![GitHub last commit](https://img.shields.io/github/last-commit/dcc5235/A-maze-ing_Game?style=flat-square) 

### Checkout the Live Version of the [Project](https://dcc5235.github.io/A-maze-ing_Game/)!

**HTML5, CSS3, JavaScript, Matter**

A responsive, JavaScript focused project which allows users to maneuver a blue ball to the square goal at the end of the maze. Upon winning, the user will see a success message.

![](https://bit.ly/3eXQhX4)

---

## Installation & Technologies

- Download the full package, select the Code button, choose the "Download ZIP" option.

- Requires use of Matter.js - Review documentation [here](brm.io/matter-js).

  - Important features in the documentation required for physics: world, engine, runner, render, body.

- CDN can be found [here](https://cdnjs.com/) - type matter js to find script.

- Toggle the maze with the a(left), d(right), w(up), and s(down) keys.

---

## Project Challenges

Challenges | Outcomes within Project
------------ | -------------
How do we generate a maze? | Set up a tree data structure + use recursion to implement simple algorithm.
How are we going to draw a maze? | Matter.JS grid system can be used to draw the maze onto a canvas element.
How do we make keys control the ball? | Matter.JS allows key presses to be mapped so that movement can occur on shapes.
How do we detect when the ball touches goal? | Matter.JS detects collisions between different shapes & report them to us as events.
 
---

## Structure for Building a 2D Maze
- Create a grid of cells.
- Pick a random starting cell & iterate it.
- Build a randomly-ordered list of neighbors for that cell.
- If a neighbor has been visited previously, remove it from the list.
- For each remaining neighbor, move to it and remove the wall between those cells.
- Repeat for new neighbor.

## Structure for Building Shapes & Border Walls
- We need border walls to prevent shapes from falling off the page.
- See shapes.js as sample idea to build border walls and shapes.

![](https://bit.ly/3kEXFYR)

---

## Ideas for Version 2.0
- Add a loading page that tells users how to maneuver the maze. Users must use the a(left), d(right), w(up), and s(down) keys.
- Add a modal that allows users to reset the game. The game already randomizes the maze upon refreshing.

---

## Contributors

Dany Chheang dany.chheang@gmail.com
