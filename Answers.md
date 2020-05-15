1. What problem does the context API help solve?

We use context API to keep state management clean and also pass props without parent child restriction.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions tells reducers how to update data and what data the reducer should update. Reducers takes dispatched action and update state by returning a new object. Store keeps all the actions and reducers and open to any components that need access of state. The store is known as a single source of truth since we can access the state anywhere with store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state is global and component state is local. Application state is better if multiple states that are not on the same node tree level needs access of the same state.  

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk is a node package that allows async function.The action-creator returned thunk has access to the dispatch function. So we can run an async function, like an API call, and inside the .then() we can dispatch an action

1. What is your favorite state management system you've learned and this sprint? Please explain why!

  I like context api since the syntax is much cleaner than redux.