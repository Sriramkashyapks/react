const data = [
    {
        id: 1,
        question: 'What is React?',
        answer: 'React is a front-end JavaScript library developed by Facebook in 2011. It follows the component-based approach for building reusable and interactive UI components.'
    },
    {
        id: 2,
        question: 'What are the features of React?',
        answer: 'Some of the key features of React include: Virtual DOM, JSX, Components, One-way Data Binding, and so on.'
    },
    {
        id: 3,
        question: 'What is JSX?',
        answer: 'JSX is a syntax extension for JavaScript. It is used with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.'
    },
    {
        id: 4,
        question: 'What is Virtual DOM?',
        answer: 'The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.'
    },
    {
        id: 5,
        question: 'What is the difference between Element and Component?',
        answer: 'An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes. Elements can contain other Elements in their props. A component is a function or a class that accepts an input and returns a React element.'
    }  
];

export default data;