# Maze Game ![GitHub version doc](https://img.shields.io/badge/Version-1.0.0-red) ![GitHub last commit](https://img.shields.io/github/last-commit/dcc5235/A-maze-ing_Game?style=flat-square) 

-->Work in progress

**HTML5, CSS3, JavaScript, Matter**

A responsive, JavaScript focused project which allows users to maneuver a maze and upon winning, will see a success message.

![]()

---

## Installation & Technologies

- Download the full package, select the Code button, choose the "Download ZIP" option.

- Requires use of Matter.js - Review documentation [here](brm.io/matter-js).

  - Important features in the documentation required for physics: world, engine, runner, render, body.

- CDN can be found [here](https://cdnjs.com/) - type matter js to find script.

---

## Project Challenges

Challenge | Solution
------------ | -------------
How do we generate a maze? | tree data structure + recursion to implement simple algorithm
How are we going to draw it? | Matter JS to draw the maz onto canvas element 
How we make keys control ball? | Matter JS map key presses to movements of shapes
How do we detect when ball touches goal? | Matter JS to detect collisions between different shapes & report them to us as events
 
---

## Build a 2D MAZE
- create a grid of cells
- pick a random starting cell & iterate it
- build a randomly-ordered list of neighbors for that cell
- if a neighbor has been visited prev, remove it from the list
- for each remaining neighbor, move to it and remove the wall between those cells
- repeat for new neighbor

## Shapes/Border Walls in 2D Maze
- need border walls to prevent shapes from falling off page
- can use shapes.js as sample idea to build border walls and shapes

---

## Contributors

Dany Chheang dany.chheang@gmail.com
