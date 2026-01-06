import { useState } from 'react';

function App() {
  {/* state for login status and username input */}
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [confirmedUsername, setConfirmedUsername] = useState('');
  {/* state for list*/}
  const [tasks, setTasks] = useState([]);

  const handleLogin = (e) => {
    {/* turn off auto update page */}
    e.preventDefault();
    {/* set confirmed username for update after click */}
    setConfirmedUsername(username);
    {/* set login status to true for showing H2 */}
    setIsLoggedIn(true);
    {/* clear input field after login */}
    setUsername('');
    {/*clean tasks list */}
    setTasks([]);
  }

  const handleAddTask = (e) => {
    {/* turn off auto update page */}
    e.preventDefault();
    {/* add confirmed task to tasks array */}
    setTasks([...tasks, username]);
    {/* clean input field */}
    setUsername('');
  }

  return (
    <>
      <h1>Hello, pls LogIn</h1>
      <form>
        <input 
          type="text" 
          placeholder="Enter your value"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button disabled={username === ''} type="button" onClick={handleLogin}>Login</button>
        <button disabled={isLoggedIn === false || username === ''} type="button" onClick={handleAddTask}>Add Task</button>
      </form>
      {isLoggedIn && <h2 style={{color: "red"}}>Welcome, {confirmedUsername}!</h2>}
      
      <h1>To Do List</h1>
      <ul>
        {tasks.map((task) => <li key={task}>{task}</li>)}
      </ul>
    </>
  )
}

export default App
