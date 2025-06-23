// //select elemnt by javascript
// //getElementById returns the elemnt as an object or null
// document.getElementById("mainImg");
// //getElementByClassName returns teh elements as an  html collection or empty collection
// document.getElementsByClassName("oldImg")[0];//it will help to find first image in class
// //getElementByTagName returns teh elemnts as an html collection or empty collection
// document.getElementsByTagName("img")[0];//it will help to find first image in tag


// //QUERY SELECTOR
// //it is used to select element by css selector
// //it returns the element as an object or null
// document.querySelector('p');//select first p element
// document.querySelector('#description');//select description
// document.querySelector('.oldImg');//select first element with class oldImg


// //setting contents in object
// //innerText shows the visible text contained in a node
// //textContent shows all the full text contained in a node
// //innerHTMl shows the full markup
// let para = document.querySelector('p');
// undefined
// para.innerText
// 'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays'
// para.innerHTML
// '\n      <b style="user-select: auto;">Spider-Man</b> is a superhero appearing in American comic books\n      published by\n      <a href="https://www.google.com/search?q=Marvel+Comics" style="user-select: auto;">Marvel Comics</a>.\n      Created by writer-editor <b style="user-select: auto;">Stan Lee</b> and artist <b style="user-select: auto;">Steve Ditko</b>, he\n      first appeared in the anthology comic book\n      <a href="https://www.google.com/search?q=Amazing+Fantasy" style="user-select: auto;">Amazing Fantasy</a>\n      #15 (August 1962) in the <a href="#" style="user-select: auto;">Silver Age of Comic Books</a>. He has\n      been featured in comic books, television shows, films, video games,\n      novels, and plays\n    '
// para.textContent
// '\n      Spider-Man is a superhero appearing in American comic books\n      published by\n      Marvel Comics.\n      Created by writer-editor Stan Lee and artist Steve Ditko, he\n      first appeared in the anthology comic book\n      Amazing Fantasy\n      #15 (August 1962) in the Silver Age of Comic Books. He has\n      been featured in comic books, television shows, films, video games,\n      novels, and plays\n    '
// para.innerText = "Spider man comic"
// 'Spider man comic'
// para.innerHTML = "Spider<b> Man</b>"
// 'Spider<b> Man</b>'


// //manipulating attributes
// //getAttribute returns the value of an attribute
// //setAttribute sets the value of an attribute
// let img = document.querySelector('img');
// img.setAttribute('src','assets/creation_3.jpeg');
// let links = document.querySelectorAll(".box a");
// links.forEach(link =>{
//     link.computedStyleMap.color = "purple";
//     });

// //using classlist 
// //classList returns a DOMTokenList containing the class names of an element
// //add adds one or more classes to an element
// //remove removes one or more classes from an element
// //toggle adds a class if it is not present, otherwise removes it
// let box = document.querySelector('.box');
// box.classList.add('active');
// box.classList.remove('active');
// box.classList.toggle('active');
// //classList.contains returns a boolean indicating whether an element has a class
// box.classList.contains('active')



// //navigation
// //parentElement
// //parentElement returns the parent element of a node
// //children
// //children returns a NodeList of child elements of a node
// //previousElementSibling
// //previousElementSibling returns the previous sibling element of a node
// //nextElementSibling
// //nextElementSibling returns the next sibling element of a node

// //adding elements
// //document.createElement('p');//it will create paragraph
// //appendChild to insert para inside body
// //insertBefore to insert para before a specific element


// //removing elements
// //removeChild to remove para from body


// //practice question 
// //add the following elements to the container using js and the dom methods
// //1. a <p> with red text that says "hey i am red!"
// //2. an <h3> with blue text that says "I am a blue h3!"
// //3. a <div> with a black border and pink background color with the followign inside of it 
// //another <h1> that syas "I am inside div"
// //a<p> that says "Mee TOO!"
let para1 = document.createElement('p');//creates
para1.innerText = "hey i am red";//text dalna
para1.style.color = "red";//color dalna
document.querySelector('body').append(para1);//to show it over main page
let h3 = document.createElement('h3');//creates h3
h3.innerText = "I am a blue h3!";//text dalna
h3.classList.add("blue");//to put color we use classlist here
document.querySelector("body").append(h3);//to show
let div =  document.createElement('div');
div.classList.add("div");
let h1 = document.createElement('h1');
h1.innerText = "I am inside div";
div.append(h1);
let para2 = document.createElement('p');
para2.innerText = "Mee TOO!";
div.append(para2);
document.querySelector("body").append(div);