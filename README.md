## Using Typescript with React by Peter Kellner

- INTRODUCING TYPESCRIPT TO A REACT APP:
    ```javascript
        let x = 5 + "5";
        console.log(typeof x, x);
    ```
    `string` `55`
    - JavaScript type coercion.
    - TypeScript primitives: string, number, and boolean.
    - Three TypeScript patters for React:
        - Function parameters:
            ```javascript
                function useFilter(list: string[], searchVal: string): string[] { }
            ```
            - Specify parameter types in TypeScript functions and custom React hooks to prevenbt surprising and unintended results.
        - Component properties:
            ```javascript
                type PageProps = { data: string[]; searchVal: string; }
                function Page (props: PageProps) { }
            ```
            - Define React components with typed props to guarentee valid data and consistent rendering in TypeScript.
        - Generic Types:
            ```javascript
                const [myList, setMyList] = useState<string[]>();
            ```
            - Leverage TypeScript's generic types for flexible, reuseable code and explicit parameter definitions in function calls.
    - Demo:
        - Core technologies:
            - Next.js
            - TypeScript
            - Bootstrap
            - Zod (Validation)
            - Node-cache (caching)
            - Font Awesome
        - React Components:
            - React 19
            - React Server Components
            - React Server Functions
            - React Client Components
            - React Suspense
        - React Components:
            - useState
            - useEffecr
            - useTransition
            - useContext
            - useReducer
            - useRef

- CONVERTING AN EXISTING JAVASCRIPT APP TO TYPESCRIPT:
    - Migrate conference app from JavaScript to TypeScript.
    - Function Parameters:
    - NOTE:
        ```javascript
            {
            "compilerOptions": {
                "target": "ES2017",
                "lib": ["dom", "dom.iterable", "esnext"],
                "strict": true,
        ```
    - Component Properties:
    - Generic Types: Allows for reuseable functions to be created that can work with a variety of different types.
        ```javascript
            const [darkTheme, setDarkTheme] = useState<boolean | undefined>();
        ```
    - useReducer and the TypeScript union operator:
        - useReducer is an advanced manner in which to manage state.
        - Used when multiple states are dependent upon each other.
        - The union type in TypeScript reduces coding errors.
            ```javascript
                'use client';
                import { useState } from 'react';
                export default function Page() {
                    const [count, setCount] = useState(0);
                    function increment() {
                        setCount(count + 1);
                    }
                    function decrement() {
                        setCount(count - 1);
                    }
                    return (
                        <div>
                            <button onClick={increment}>Increment</button>
                            <button onClick={decrement}>Decrement</button>
                            {count}
                        </div>
                    );
                }
            ```
            ```javascript
                'use client';
                import { useReducer } from 'react';
                export default function Page() {
                    type counterAction = "increment" | "decrement"';
                    function counterReducer(state: number, action: counterAction): number {
                        // Instruction to update state in a non-mutating manner.
                        if (action === "increment") {
                            return state + 1;
                        } else if (action === "decrement") {
                            return state - 1;
                        } else {
                            return state;
                        }
                    }
                    const [count, dispatch] = useReducer(counterReducer, 0);
                    return (
                        <div>
                            <button onClick={() => dispatch("increment"))}>Increment</button>
                            <button onClick={() => dispatch("decrement"))}>Decrement</button>
                            {count}
                        </div>
                    );
                }
            ```
        - In this ap we do have a good case for including useReducer:
            - Optimistic API. On success, the UI does not need to update.
                - Assumption: COmpletes successfully.
    - useRef: Returns `.current`
        ```javascript
            const myCount = useRef(value);
            const myCount = useRef<number>(value);
        ```
        - Allows for direct access to Browser DOM nodes.
            - Update component data: Allows for updating local component data without causing a rerender.
            - Direct DOM access: Used to perform direct updates to the DOM not typically supported by React.
        - NOTE: TypeScript with useRef ensures invalid types cause TypeScript errors.
            - Ther shape of returned data does not change over time.
    - Think incremental migrations.

- IMPLEMENTING TYPE SAFETY AT RUNTIME FOR REACT SERVER COMPONENTS AND FUNCTIONS:
    - Type safety in React code is about more than static type checking.
        - Ensure run-time data is also correct.
        - TypeScript is all about enforcing rules on our JavaScript code.
        - It is a transpiler that converts TypeScript to JavaScript.
        - Smart editors can enforce TypeScript.
        - Data from a REST server? e.g.: `{ id: "serial101" }`
            - Invalid data nbeeds runtime type checking.
    - Zod runtime type checking.
        - Zod uses schemas. Mirrors TypeScript types. Verified runtime data.
        ```javascript
            npm install zod
        ```
    - NOTE: Good practice to validate data in the server.
        - Then validate data in the client.
        - The zod schema is the same whether running on the node server or the browqser.
    - Server Action is often used as an informal manner in which ro refer to Server FUnctions.
    - NOTE: TypeScript is a first-class citizen in the React ecosystem.