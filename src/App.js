import './App.css';
import { useAuth0 } from '@auth0/auth0-react';



function App() {

  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  return (
    <div className="App">
      <p>Whisper Palooza - We Can See Your Messages But Its Free To Chat</p>

      <ul>
        <li>
          <button onClick={loginWithPopup}>login with popup</button>
        </li>
        <li>
          <button onClick={loginWithRedirect}>login with redirect</button>
        </li>
        <li>
          <button onClick={logout}>logout</button>
        </li>
      </ul>

      <h4>
        {isAuthenticated ? 'logged in' : 'please login'}
      </h4>

      {isAuthenticated && (<pre>{JSON.stringify(user, null, 2)}</pre>)}

    </div>
  );
}

export default App;
