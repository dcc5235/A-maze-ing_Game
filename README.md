# Canvas_Game
Work in progress

## Installations and Requirements
Requires use of matter.js - read more documentation at brm.io/matter-js

Important to note these features in docs: world, engine, runner, render, body

CDN can be found here - https://cdnjs.com/ (will need the script to work)

## Project Challenges

Challenge | Solution
------------ | -------------
How do we generate a maze? | tree data structure + recursion to impelment simple algorithm
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

## Contributors

Dany Chheang dany.chheang@gmail.com
