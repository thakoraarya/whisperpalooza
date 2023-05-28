// import axios from 'axios';
import './App.css';
// import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';



function App() {
  // const { dbUserData, setDbUserData } = useState(null);
  // const { loginWithPopup, logout, isAuthenticated, getAccessTokenSilently } = useAuth0()

  // function callRootApi() {
  //   axios.get("http://localhost:4000/")
  //     .then(response => console.log(response.data))
  //     .catch(error => console.log(error.message))
  // }

  // const login = async () => {
  //   try {
  //    console.log('into login')
  //     //  auth0 login functions
  //     await loginWithPopup();
  //     const token = await getAccessTokenSilently();
  //     console.log(token);

  //     const dataa = await axios.get('http://localhost:4000/api/login', {
  //       headers:
  //       {
  //         Authorization: `Bearer ${token}`,
  //       }
  //     })
  //     console.log(dataa);


  //     const saveusr = await axios.get('http://localhost:4000/api/saveuser', {
  //       headers:
  //       {
  //         Authorization: `Bearer ${token}`,
  //       }
  //     })
  //     console.log(saveusr);


  //     // Retrieve the user data from the database
  //     const dbResponse = await axios.get('http://localhost:4000/api/user-data', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(dbResponse);
  //     const dbUserData = dbResponse.data;
  //     setDbUserData(dbUserData);
  //     console.log(dbUserData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  return (
    <article className="App">
      <section>
        <p>Whisper Palooza - We Can See Your Messages Perhaps Its Free To Chat</p>

        {/*
        <button onClick={login}>login</button> <br /><br />
        <button onClick={logout}>logout</button> */}


        <h4>
          {isAuthenticated ? 'logged in' : 'please login'}
        </h4>
        <h2>
          {isAuthenticated ? <button onClick={logout}>logout</button> : <button onClick={login}>login</button>}

        </h2>

        {isAuthenticated && (<pre>{JSON.stringify(dbUserData, null, 2)}</pre>)}
        {/*
        {user && (
          <div>
            <img src={user.picture} alt='profile' />
            <h1>{user.name}</h1>
          </div>
        )} */}

        {dbUserData && (
          <div>
            <h3>User Data Retrieved from Database:</h3>
            <p>Username: {dbUserData.username}</p>
            <p>Email: {dbUserData.email}</p>
          </div>
        )}


      </section>


    </article>
  );
}

export default App;
