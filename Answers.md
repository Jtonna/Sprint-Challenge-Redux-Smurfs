1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

maps, filer and reduce are the best options as they dont produce side-effects. typically we use map to create a new obj.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions sends data from the application to the store, the store is the global state for the app. when actions are 'dispatched, it goes to the reducer and returns a new obj.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the state for the entire app, its also immutable. the component is a local state. we should use component states is things like sign up forms and for scalable apps that dont use state-full components we should use application state

1.  What is middleware?

middle ware is kind of like what a Man In The Middle attack, it intercepts ALL the traffic (data) or in this case action before it goes through the reducers (or devices on the network)

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is how we dispatch async changes from one state to another, its middleware that looks for actions that are functions. it allows us to look for actions that are functions and when it finds them it dispatches them

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect / dispatch allow us to link up components to the store

