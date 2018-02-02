

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

## Project 11: HTML 5 Video Player
- Separating script.js file's contents into different parts (getting elements, functions and event listeners) makes everything look really neat and organised.
- using flexBasis's percentage value to control the progress bar was new
- Sometimes, unicode characters prove to be more convenient and flexible than using icons
- Common video commands to control its movement ('paused', 'play','pause','currentTime')

## Project 12: Key Sequence Detection
- Using splice, you can constantly check an array and remove old chars to keep it at a constant size
- Cornify is a fun library to play with... Maybe next time I can make my own mini library just for fun :)

## Project 13: Slide In On Scroll
- Assign values into well-named variables before going into loops and if statements
- Debouncing - making sure a function is not called again until a certain amount of time has passed. This ensures you dont have 1 gazillion events happening whenever you scroll
- 'window.scrollY', 'window.innerHeight', 'image.offsetTop'
- Sliding elements in is done by first translating them (transform:translateX(30%)) off their original position, and then adding a class to translate them back to appear when scrolling is done.
- This effect can sometimes be considered overused/annoying, and should be used after consideration.

## Project 14: Object and Arrays - Reference VS Copy
- Strings, Numbers & Booleans pass by value (a copy of it)
- Arrays & Objects pass by reference (linked to it)
- This can be solved by using methods that create a copy of the array/object
- Array: 'arr.slice()' , '[].concat(arr)' , '[...arr]' , 'Array.from(arr)'
- Object: 'Object.assign({}, arr, {number:99})'

## Project 15: LocalStorage and Event Delegation
- LocalStorage is a object that exists in the window, existing differently in each browser/pc
- retrieval of objects in localStorage is done through .toString, thus JSON.stringify should be done before storing items.
- e.preventDefault => useful to stop automatic browser refresh
- custom data attributes (data-) allow for information to be accessed between HTML,DOM and scripts
- Event Listeners can be nested for multiple purposes (listen for even, check listener for e.target) 

## Project 16: Mouse Move Shadow
- having a 'contenteditable' property makes the element content editable
- whole lot of offset values to play with(gotta find out what each of them mean) : offsetLeft (directional words), offsetX/Y (axis), offsetWidth (dimensional)
- using ES6 `backtick` to add multiple lines of values w/ variables makes a code block look a lot nicer
- Checking `this` against `e.target` to know what element we're actually selecting/listening to

## Project 17: Sorting Band Names without Articles
- str.replace returns a new str, and does not edit the existing str. Need to store it in a variable
- When selecting multiple elements in eventlistener, you can use e.target.tagName or e.target.type to identify element
- access element's 'for' attribute using 'htmlFor'
- you can have multiple selectors in str.replace using a single || or sign `band.replace(/the |an |a /gi,'')`
- check if string includes an array of values using `arr.some` and `includes`
- Style radiobuttons as normal buttons by putting them within labels and styling the labels

## Project 18: Tally String Times with Reduce
- dataset.time access the [data-time] attribute
- map function is pretty convenient, you can use it to replace each value inside an array, loop over each value and calculate a new value (with multiple lines of operations)
- reduce takes 2 params -> a new var to store values, and name of var that stores each looped element

## Project 19: Unreal Webcam Fun
- getImageData returns pixels info: for each pixels there are 4 values, rgb Alpha
- Filters work by applying changes to the pixels, and then returning it to the main function before setting it (to display)
- ctx.drawImage used to display the video
- ctx.getImageData used to retrieve pixels
- canvas.toDataURL('image/jpg') creates an image file for download (with set attribute)

## Project 20: Speech Detection
- SpeechRecognition only available in Firefox, so we use webkit
- speechRecog, interimResult = true allows the text to update AS you are speaking, not after
- document.createElement and div.appendChild() allows you to add a paragraph of words

## Project 21: Geolocation Speedometer & Compass
- navigator has quite a number of interesting functions :o
- navigator.geolocation.watchPosition gets all relevant data
- Possible to do more exploration with the data it provides

## Project 22: Follow Along Links
- element.getBoundingClientRect() retrieves the element's width, height, and position values
- mouseenter event for 'hover' event listening
- using multiple linear-gradient values can give you a pretty colourful background

## Project 23: Follow Along Links
- SpeechSynthesisUtterance() is the main function that says out the words, speechSynthesis
- Used a loop to get all voices, populate a list, and listen to change event to allocate the selected voice to the speechSynthesis

## Project 24: Sticky Nav
- fixed elements do not take up space in the browser, they float above other elements
- simple action of adding/remove classes can trigger width/height related css that starts animations
- combine offsetTop and padding to prevent elements from shifting after navbar is fixed

## Project 25: Event Capture, Propagation, Bubbling and Once
- Bubbling > Clicking on a nested element will also trigger a click on the wrapping elements. text > div > body > html etc.
- 'capture' option - run function on the way in (bubble down from outside to inside elements)
- e.stopPropagation stops the bubbling, and you'll only trigger the exact element you click
- 'once' option - run the event listener once and then unbind itself (one off listener) e.g. store checkout - only click once

## Project 26: Stripe Follow Along Dropdown
- Using element's GetBoundingClientRect() and then transforming the offset values allows for a fixed positioning of the dropdown menu
- using setTimeout() to sync the appearance of menu content and background box
