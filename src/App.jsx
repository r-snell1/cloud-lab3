import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello! My name is Ryan! The count is {count}.
        </p>
      </div>
    </>
  )
}

export default App
