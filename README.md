# Linked List

## Features: 
Classes: 
* LinkedList class / factory, which will represent the full list.
* Node class / factory, containing a value property and a nextNode property, set both as null by default.  

Methods:

* `append(value)` adds a new node containing value to the end of the list
* `prepend(value)` adds a new node containing value to the start of the list
* `size` returns the total number of nodes in the list
* `head` returns the first node in the list
* `tail` returns the last node in the list
* `at(index)` returns the node at the given index
* `pop` removes the last element from the list
* `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
* `find(value)` returns the index of the node containing value, or null if not found.
* `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

### Extra credit 
* `insertAt(value, index)` that inserts a new node with the provided value at the given index.
* `removeAt(index)` that removes the node at the given index.

## Cloning this project locally
1. Clone this repository in any location.
2. In terminal, navigate to this repository.

## How to run the script
1. Navigate to root of this project.
2. Run:  
   `node main.js`
3. To automatically restart script upon changes:  
   `nodemon main.js`  
   Install nodemon in the system if it's not installed:  
   `npm i -g nodemon`. 