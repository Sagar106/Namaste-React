Class based components lifecycle methods

- Whenever a class based component is loaded on to the web page, a new instance of that class is created and the constructor method is called and then the render method is called

- One can use class based components using two way :
    import React from React => class ComponentName extends React.component
    import { Component } from React => class ComponentName extends Component

- Mounting order :
    Parent Contructor
    Parent Render
    Child Constructor
    Child Render

- ComponentDidMount()
    ComponentDidMount method is called only when the class component has been rendered on the page

- Mounting order in case ComponentDidMount() is used in both Parent and Child components
    Parent Constructor
    Parent Render
    Child Constructor
    Child Render
    Child ComponentDidMount
    Parent ComponentDidMount

- Life Cycle Methods in case of Multiple Childrens
    - First the render phase will be called for Parent which will included calling the constructor and render
    - Then the life cycle methods of the child components will be called which will be their each render phase
    - Once the render phase is over, the commit phase of the child components are called and at last commit phase of parent component is completed
    - The commit phase takes care of actual DOM updates and calling the component did mount

- ComponentWillUpdate()
    - Component will update is called whenever the state changes after an initial render
    - It is used generally to write conditional statements or logic that needs to be executed in case the state has changed from the previous time
    - This in useEffect has a similarity where a dependency array is used instead for running side effects in case of conditionally executing a piece of code inside useEffect

- ComponentWillUnmount()
    - This method is used to execute code on leaving a page or for cleanups in case we are using timeouts or intervals
    - In useEffect, we cleanup any intervals or timeouts by writing the code inside return function
    - return () => {}

- VVIP
    - useEffect is not equivalent to class component's lifecycle methods
    - They both are completely different concepts