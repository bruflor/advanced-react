# Course notes and tips

## Design Patterns
### Layout components
Specialize components to organize other components in a webpage

- Split Screen
- Lists
- Modal

### Container components
They are unaware of the source or management of their data.

### Hooks Tips

- usecallback: when we want to perform an action before the element is rendered, we use useCallback and inside of it put it what you want to be triggered.
- useId
- useLayoutEffect
- useRef
- useImperativeHandle: define what exactly you want to access in ref with forward ref;
- useDeferredValue: await the state to be finish in update, like in a fast keyboard typing, and then send it the updated state to the component that receive the variable with deferred;
- useTransition: when you want to delay the update of the state, and if you change it again just stop the transition and change it again. Cases of tabs, buttons that render something. The diference between useDeferred is translation delay the setState
- 