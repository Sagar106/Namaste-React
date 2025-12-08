Integration Testing

- An integration test checks whether the whole flow works properly.

Integration testing in React is all about testing how multiple components, hooks, services, and   modules work together as a group, rather than testing each component in isolation (unit tests) or testing the whole app in a browser (E2E tests).

Fetch function in integration testing :

1. Since we are testing in jsdom environment which is a browser like env, it doesn't have a fetch fucntion like the browser.
2. So we mock the fetch function given to us by browser to make mock api call
3. We make our own fetch in jsdom by using jest.fn() which should return promise with resolved data.
4. Reason: fetch() returns a promise → containing a response object → containing a json() method → which also returns a promise.
5. We can't make network call using this mock fetch function, so we have to use mock api data received from the actual fetch call to mock the returned data.
6. Use act to wrap your render as fetch call is an async operation. It is provided by @testing-library/react