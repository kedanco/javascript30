

=============== Javascript30 ================
=========

<b>My Javascript 30 Notes</b>

Started 6th Jan 2018

## Project 1: Drum Kit
- For keycode/charcode listening, a more supported way is to use e.which (covers both char and key code)
- Add multiple events to 1 Eventlistener by using ["keydown", "click"].forEach(evt => ..window.eventlistener...)

## Project 2: CSS Variables
- Init with --varname
- Use with var(--varname)
- Difference between nth-child and nth-of-type (refer to html notes)
- dataset is an object that contians all data attributes from the specific element
- Access 'root' in CSS by using `document.documentElement.style.setProperty`

## Project 3: CSS + JS Clock
- Learned how to use rem (root em) unit of sizing
- tried the css properties 'transition', 'transition-timing-function', 'transform', and 'transform-origin'
- You can get the current time by calling new Date() and using the function .toLocaleTimeString();
- Learned how to draw a circle with CSS

## Project 4: Array Cardio 1
- You can do console.table and it displays what you have (if its a hash-like object) in a table form. Hella neat!
- Filter: Iterates through contents of array, keep the element if condition is true
- Map: Iterates through contents of array, executes code on every element, *returns a new array with the same length*
- Sort: Iterates through contents of array, compares every (a,b) of elements according to condition
- Every function needs a return statement
- no 'contains',no 'include', only 'includes'
- Array.from creates an array from the enclosed content

## Project 5: Flex Panels
- using display:flex, you can set flex-direction, and flex sizes of the flex items
- using transform:translateY, you can shift items up & down wards
- transition:font-size and transition:flex, and cubiz-bezier values allows for animation of the items
- Elements can be both a Flex container and Flex item
- Grid-like display is achieved using flex and centering contents.

## Project 6: Ajax Type Ahead
- fetch, as browser API that returns a promise(something that eventually resolves)
- .then(returndata) after fetch, return data is still raw and not in the correct format
- data.json() converts data into json format 
- .then again, to spread and add the data into an array
- spread '...' (ES6) converts a list like dataset/Nodelist into an array
- put a var into regex by creating a new RegExp object
- .match compares array elements against RegExp object

## Project 7: Array Cardio 2
- console.log with {var} will also show the var name, not just value
- splice (remove at index) different from slice (return substring)
- 'some' and 'every', array check functions that return a boolean (if some/every element fulfills condition)
- 'find' returns the object and 'findIndex' returns index of that object

## Project 8: HTML5 Canvas
- With canvas, you can use ctx(context) to set 2d/3d drawing and dictate draw settings
- hsl (hue, saturation, lightness) is another way to represent rgb colours
- ctx commands 'beginPath','moveTo','lineTo' and 'stroke' control the actual drawing on the canvas

## Project 9: Dev Tools
- Among the console commands, other than .log and .table, .info, .warning, and .error provide a different type of display
- %s for string interpolation, %c for css styling
- assert is like a conditional statement, if (cond) is false, then display message
- .dir provides additional information about the element
- group and groupend collapses the messages within as one group, like how selected elements are displayed
- .count counts the number of time the exact string is printed
- time and timeEnd displayed the time elapsed for a certain operation

## Project 10: Shift-Check Multiple Checkboxes
- querySelectorAll returns a NodeList, and after using Array.from conversion, you can call indexOf to check the index of the element from its parent list
- e.shiftKey is a convenient check (there's also ctrl, alt and meta(cmd) key)
- You can separate multiple statements in a ternary operation with brackets and comma (a=1,b=2)
- selecting additional property conditions 'input[type="checkbox"]:checked'
- use e.target/this to get the element from an eventlistener

## Project 10: Shift-Check Multiple Checkboxes
- Separating script.js file's contents into different parts (getting elements, functions and event listeners) makes everything look really neat and organised.
- using flexBasis's percentage value to control the progress bar was new
- Sometimes, unicode characters prove to be more convenient and flexible than using icons
- Common video commands to control its movement ('paused', 'play','pause','currentTime')

