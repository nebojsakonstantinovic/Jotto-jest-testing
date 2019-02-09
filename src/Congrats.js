import React from 'react';

/**
 * Functional react component for congratulatory message/
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component
 */

const Congrats = (props) => {
    if (props.success) {
      return (
        <div data-test='component-congrats'>
        <span data-test='component-message'>
          Congratulations! You guessed the word!
        </span>
      </div>
      )
    } else {
      return <div data-test='component-congrats' />
    }
}

export default Congrats;