// Import the `useState` hook from Preact for managing state within the component.
import { useState } from 'preact/hooks';

// Define the Greeting component, which takes `messages` as a prop.
export default function Greeting({messages}) {

  // Function to select a random message from the `messages` array.
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  // Use the `useState` hook to create a state variable `greeting`, initialized with the first message in the `messages` array.
  // `setGreeting` is the function to update the `greeting` state.
  const [greeting, setGreeting] = useState(messages[0]);

  // The component's render method, returning a div containing a greeting and a button.
  return (
    <div>
      {/* Display the current greeting, followed by a thank-you message */}
      <h3>{greeting}! Thank you for visiting!</h3>

      {/* Button that, when clicked, sets the greeting state to a random message */}
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
