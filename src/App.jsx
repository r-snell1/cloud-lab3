import React from 'react';
import GitHubLoginButton from './GitHubLoginButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          <h1>Welcome to the App! My name is Ryan!</h1>
          <GitHubLoginButton />
        </div>
        
      </div>
    </>
  )
}

export default App
