// import heaer from the og file
import header from './components/header/header'


// get a reference to the app container inside the index.html file:
const app = document.querySelector('#app');
console.log(app);


// you can use the document.createElement or
// template literal syntax ``
// use a templating engine

const markup = header('To Do App');
console.log(markup);

// methods used to insert markup into the DOM:
// innerHTML: this method inserts a string on the RHS. innerhtml causes the browser to re-render the whole page. Only use innerHTML is the content I am inserting does not need events. 
// insertAdjacentHTML: this does not cause a re-render, it only inserts that string.
// append
// prepend
// remove
// adjacent html

app.innerHTML = "<p></p>"
// when would you use this?