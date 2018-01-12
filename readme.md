<b>My Javascript 30 Notes</b>

Started 6th Jan 2018

==========Javascript30=========

Project 1: Drum Kit
- For keycode/charcode listening, a more supported way is to use e.which (covers both char and key code)
- Add multiple events to 1 Eventlistener by using ["keydown", "click"].forEach(evt => ..window.eventlistener...)

Project 2: CSS Variables
- Init with --varname
- Use with var(--varname)
- Difference between nth-child and nth-of-type (refer to html notes)
- dataset is an object that contians all data attributes from the specific element
- Access 'root' in CSS by using `document.documentElement.style.setProperty`

Project 3: CSS + JS Clock
- Learned how to use rem (root em) unit of sizing
- tried the css properties 'transition', 'transition-timing-function', 'transform', and 'transform-origin'
- You can get the current time by calling new Date() and using the function .toLocaleTimeString();
- Learned how to draw a circle with CSS

Project 4: Array Cardio 1
- You can do console.table and it displays what you have (if its a hash-like object) in a table form. Hella neat!
- Filter: Iterates through contents of array, keep the element if condition is true
- Map: Iterates through contents of array, executes code on every element, *returns a new array with the same length*
- Sort: Iterates through contents of array, compares every (a,b) of elements according to condition
- Every function needs a return statement
- no 'contains',no 'include', only 'includes'
- Array.from creates an array from the enclP100 readeosing content

Project 5: Flex Panels
- using display:flex, you can set flex-direction, and flex sizes of the flex items
- using transform:translateY, you can shift items up & down wards
- transition:font-size and transition:flex, and cubiz-bezier values allows for animation of the items
- Elements can be both a Flex container and Flex item
- Grid-like display is achieved using flex and centering contents.

Project 6: Ajax Type Ahead
- fetch, as browser API that returns a promise(something that eventually resolves)
- .then(returndata) after fetch, return data is still raw and not in the correct format
- data.json() converts data into json format 
- .then again, 
- spread '...' (ES6) converts a list like dataset/Nodelist into an array
- put a var into regex by creating a new RegExp object
- .match compares array elements against RegExp object

Project 7: Array Cardio 2
- console.log with {var} will also show the var name, not just value
- splice (remove at index) different from slice (return substring)
- 'some' and 'every', array check functions that return a boolean (if some/every element fulfills condition)
- 'find' returns the object and 'findIndex' returns index of that object
- 
