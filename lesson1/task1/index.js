/* eslint-disable no-undef */

// put your code here

const rootElement = document.querySelector('#root');

// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(wrapperElem);

const greetingElem = React.createElement(
  'div', 
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingElem, rootElement)