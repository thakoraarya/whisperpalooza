import axios from 'axios';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';



function App() {

  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  function callRootApi() {
    axios.get("http://localhost:4000/")
      .then(response => console.log(response.data))
      .catch(error => console.log(error.message))
  }

  async function callPrivateApi() {
  try {
    const token = await getAccessTokenSilently();
    console.log(token);

    const responce = await axios.get('http://localhost:4000/private', {
      headers:
      {
        Authorization: `Bearer ${token}`,
      }
    });
    console.log(responce);
  } catch (error) {
    console.log(error);
  }

    // axios.get("http://localhost:4000/api/private")
    //   .then(response => console.log(response.data))
    //   .catch(error => console.log(error.message))
  }


  return (
    <article className="App">
      <section>
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

        {user && (
          <div>
            <img src={user.picture} alt='profile' />
            <p>{user.name}</p>
          </div>
        )}

      </section>
      <section>
        <h1>backend calls</h1>
        <ul>
          <li><button onClick={callRootApi}>go to root route</button></li>
          <li><button onClick={callPrivateApi}>go to protected route</button></li>

        </ul>
      </section>

    </article>
  );
}

export default App;
