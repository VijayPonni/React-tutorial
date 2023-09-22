# React Tutorial notes

# Introduction

# What is React ?

- React is the opensource javascript library for building user interfaces.

* As per the above sentence, React is not a Framework it is Library.

```
Difference between Library and Framework:

A framework is a set of pre-written code that provides a structure for developing software applications.
A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.
```

- React does not focus on other aspects of applications which are routing, http and so on. It only focus on Building rich interfaces/UI.

* As react's Eco-system supports well with other libraries like routing and http, the implementation of routing,http are possible and easy in React.

# Why React ?

- Trust - React is a Project created and maintained by Facebook. So we can trust that it will not go down soon.

* Community Support - Huge community support is available. We can get support from stackoverflow like medium if we stuck somewhere.

- Partioning - It allows to partition the application into multiple parts in the name of components.

* Code Reusability - it allows to reuse code.

* Declarative - We want to just tell react what we want, react will build the actual UI.

* Efficient rendering - React will handle efficiently updating and rendinring of the components.

* DOM updates - DOM updates are handles gracefully in React.

* Integration with other application - we can seamlessly integtate react with other application either a specific portion or entire application.

* Supports react native - It supports to study react native with ease.

# Pre-Requisties

- Html , CSS and Java Script fundamentals.

- ES6

* Java script - "this" keyword , filter, map and reduce.

* ES6 - let and const, arrow functions , template literals , default paramaters, object literals , rest and spread operators and destructuring assignment.

# Refreshment on ES6 and typeScript

## javaScript this :

- In javascript, this keyword refers to Objects where it is used.

### 1. this inside global scope:

- Whenever a this keyword is used in global scope, It refres to the Window Object.

```
let a = this;
console.log(this)    // {}

this.name = 'vijay';
conosle.log(window.name)    // vijay

```

### 2. this inside functions:

- whenever we use this keyword inside functions, It refers to the window Object.

```
function check(){
console.log("this",this)
}

check();       // this { window .... }
```

### 3. this in constructor function:

- Constructor function is used to create new Objects.

- Whenever this keyword is used in a constructor function, it refers to the object where it is used.

```

function demo(){
    this.name = 'Vijay S';         // Here this refers to the Object.
    this.age = 22;
}

let obj1 = new demo();

console.log(obj1);              // { name : Vijay S ; age : 22 }
console.log(obj1.name)          // vijay S
```

### 4. this in Object method :

- whenever this keyword is used in method inside the this refers to the Object.

```
obj = {
    name: 'vijay S',
    age : 22,
    demo(){
        console.log(this);                 // { name: 'vijay S',age : 22 , demo : Fn }
        conosle.log(this.age)              // 22
    }
}

obj.demo();

```

### 5. this inside inner function

- whenever this keyword is used inside an inner function of a method , it refers to the Window Object.

```

obj = {
    name: 'vijay S',
    age : 22,
    demo(){
        console.log(this);                 // { name: 'vijay S',age : 22 , demo : Fn }
        conosle.log(this.age)              // 22

        function inner(){
            console.log(this);             // { window Object .. }
            console.log(this.age)          // undefined
        }

        inner();
    }
}

obj.demo();

```

### 6. this inside arrow function:

- Whenever this keyword is used in an arrow function, it refers to the parent scope of the arrow function.

* Example 1:

```

const demo = () => {
    console.log(this)         // { Window Object ... }   Here demo function's parent scope is only window object
}

demo();
```

- Example 2 :

```
const obj1 = {
    name : 'vijay S',
    age :22 ,

    sayHello(){
        let hi = () => {
            console.log(this);          // { name : 'vijay S', age : 22,  sayHello : Fn}
            console.log(this.age)       // 22
        }
        hi();
    }
}

obj1.sayHello();
```

# [].map() :

- map is an higher order function ( A functions that takes another function as an argument or A function that returns another function ).

- It usually used to tranformm the array.

- it creates entirely new array.

## Example :

```

const array1 = [ 1,2 ,3 ,4, 5];

const tranformedArray = array1.map( (ele) =>  ele*2  )           // map function can have arrow function / anonymous function also.

console.log(tranformedArray)    // [2,4,6,8,10]

```

# [].filter() :

- filter is also an higher order function.

* It is used to filter an array based on a condition.

* It creates a new array with only filtered values based on a provided condition.

## Example:

```
const arry = [ 1,2,3,4,5];

const filteredArray = array.filter(function(x){ return x%2 ===0 })   // condition only to filter Even numbers from the Array

console.log(filterdArray);        // [2,4]
```

# [].reduce() :

- reduce is also an higher order function.

- This function is used to reduce an existing array to a single value by processing those array elements.

- This functions get two parameters. First one is function and second one is initial acculator value. The first argument function is responsible for logic which we is used to reduce the array. This function also takes two parameters. one is accumulator and current value.

## Example : Finding Max number in an array using reduce :

```

const array = [ 100 , 22, 300 , 450, 1000];

let maximumnumber = array.reduce( (accumulator,currentValue) => {
if(currentValue >  accumulator){
accumulator = currentValue
}
return accumulator
} ,0)

console.log(maximumnumber)          // 1000
```

## Transpilers:

- Every browsers does not support the ES6 ( ECMA Script 2015 ). So , the transpilers compiles the ES5 to normal ECMA Script which browsers should understand.

* Typescript is also the transpilers.

# Creating first React Application:

## Pre-requesties to create an React Application:

- node
- Text Editor - VS code

## Approaches to create an React application:

- Basically there are two aproaches are available to create an react application.They are:

  - 1. npx create-react-app command line interface approach
  - 2. installing the create-react-app npm package approach

1. npx approach :

   - npx is the npm package runner which gets installed when we install node.

   * So, we are directly able to run the create-react-app command and project is created by npx.

2. npm approach :

   - In this method create-react-app npm package should be installed globally.

   * Once the npm package is installed then react app should be created using command.

<img style="margin-top:10px;margin-bottom:10px" src="assets/npx_vs_npm_approaches.png" >

## Step by Step guide to create an angular application using npx approach:

step 1: install node / If already installed update and confirm the node version which you use using below command:

        node -v

<img style="margin-top:10px;margin-bottom:10px" src="assets/node_version.png" >

Step 2: move to the directory where you want to create an React application.

Step 3: In the terminal, run the below command:

         npx create-react-app <your-react-app-name>

        A react application will be created in the provided name as below image shows.

<img style="margin-top:10px;margin-bottom:10px" src="assets/first_react_app.png" >

Step 4: Move to the newly created react application's directory:

        cd <new-react-app-name>

<img style="margin-top:10px;margin-bottom:10px" src="assets/react_app_directory.png" >

Step 5: Run the React application using the below command:

        npm start

Once you type the command in terminal the react-app will get start running and in the browser, the application will be opened in the 3000 port in localhost

<img style="margin-top:10px;margin-bottom:10px" src="assets/react_app_run.png" >

<img style="margin-top:10px;margin-bottom:10px" src="assets/localhost_3000_browser.png" >

Step 6: As mentioned in the running application Edit in App.Js file in your application and save. You can see the changes reflecting in the browser.

<img style="margin-top:10px;margin-bottom:10px" src="assets/Edited_react_app.png" >

# React Application Folder Structure

- When we create an React application, a brand new appication is created and have some files and folders as default as below:

- There are three folders and four files under application's-root-directory as below:

  - node-modules Folder
  - public Folder
  - src Folder

  - .gitignore File
  - package-lock.json File
  - package.json File
  - README.md File

<img style="margin-top:10px;margin-bottom:10px" src="assets/Folder_structure.png" >

## Explanation on Files

### package.json

- package.json is a file which contains the dependencies and scripts for the project.

* It has the details like version of react application and scripts that runs,builds and even tests the react application.

<img style="margin-top:10px;margin-bottom:10px" src="assets/package.json_file.png" >

### package-lock.json

- Based on the package manager we are using, the package-lock.json/ yarn-lock.json file will be available in the created application.

- This is only responsible for consistent installations of our dependencies like libraries/other npm packages.

<img style="margin-top:10px;margin-bottom:10px" src="assets/package-lock.json.png" >

### .gitignore and README.md

- .gitignore responsible to avoid the files which we don't want to upload in the repository.

- README.ms is a documentation file.

## Explanation on Folders

### node_modules Folder

- node_modules folder is the place where every dependencies of our application installed.

- This folder get created while we create a project using create-react-app command.

- if it is not created in that time, we can create it using npm i command.

- it is responsible to run the application with all installed dependencies.

### public Folder

- This folder contains six files.

- Among them favicon.ico , logo192.png , logo512.png , manifesr.json and roots.txt are nothing to deal with us. Few are just image files and remaining should not need to be discussed.

### index.html file in public folder

- index.html is one of the files under the public folder.

* This file is the only html page for the entire react application.

* It does not mean that we should not write another html pages than this.

* As a single-page application, this index.html will be dynamically changed.

* Basically we don't want to change any code in this index.html file.

* Because In the body tag, there is div element with id root.

* This div element is responsible for every page that appear in this application.

<img style="margin-top:10px;margin-bottom:10px" src="assets/index.html_image.png" >

## src folder

Src folder is the part where every development will happen.

It has below files inside it:

- index.js

  index.js file is the starting point of react application.

  In this index.js file we specify the root component which is app component and the DOM element which will be controlled by react and the DOM element we specified is element with id as root ( div element in index.html file under public folder )

  So, In the react application app component is rendered inside the div element's DOM.

<img style="margin-top:10px;margin-bottom:10px" src="assets/index.js.png" >

- App.js - App.js file is responsible for the view we see in the browser.

- App.css - App.css is responsible for styling the App component.

- App.test.js - It is for unit testing

- index.css - It is for styling the body of this application.

- logo.svg - It is just a image file.

- reportWebVitals.js

* setupTest.js

# React application control flow ( What happens when we run react application using npm start command in terminal ? )

- When we run the react application using the npm start command in terminal, the <b> index.html </b> file is served in the browser.

* index.html contains the root DOM node.

* Next, the control enters to the index.js file.

* In the index.js file, the ReactDOM renders the App component into the root DOM node.

* The App component contains the html which is displayed in the browser.

# Components

## Basics about components

- In React component refers the part of the User Inerface.

* components basically partition the entire application with multiple parts. For Example, For a basic application there may components like below image shows:

<img style="margin-top:10px;margin-bottom:10px" src="assets/component-structure_example.png" >

- Components are re-usable.

* A component can contain another component or components.

## Component in Code

- component is basically a java-script file or a file with .jsx extension. For Example App component refers to the App.js file.

* This file will conatin the detail of the component. But the component code will differ based on the component types.

## Component Types

- There are two types of components. They are:

  - Stateless Functional Components

  * Statefull Class Components.

### Stateless Functional Components:

- Functional components are simply a java-script functions which returns the HTML that describes UI.

- Example :

```
function example(componentType){
    return <h1> Hi I am Just Example for { componentType } ... </h1>;
}
```

<img style="margin-top:10px;margin-bottom:10px" src="assets/app_functional_component.png" >

### Stateful Class Components:

- Class Components are normal ES6 classes that extends the React Component from react-library.

- This classmust have the render() method inside it.

- The render() method should return the HTML that describes the UI.

- Example:

```
import { Component } from { reactLibrary.. };

Class example extends Componment{
    render(){
        return <h1> Hi I am Just Example for { componentType } ... </h1>;
    }
}
```

<img style="margin-top:10px;margin-bottom:10px" src="assets/app_class_component.png" >

<br>

<img style="margin-top:10px;margin-bottom:10px" src="assets/types_of_components.png" >

<img style="margin-top:10px;margin-bottom:10px" src="assets/components_summary.png" >

# Functional Components in detail:
