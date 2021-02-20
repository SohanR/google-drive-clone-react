import { useState } from 'react';
import './App.css';
import FilesView from './components/FilesView/FilesView';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SideIcon from './components/SideIcon';
import { auth, provider } from './firebase';
import GDlogo from './media/google-drive-logo.png';
function App() {

  //auth

  const [user, setUser] = useState();


  const handleLogin = ()=>{
    if(!user){
      auth.signInWithPopup(provider).then((result) =>{
        setUser(result.user)
      })
    }
  }

  return (
    <div className="App">

      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />

            <div className="app_main">
              <Sidebar/>
              <FilesView/>
              <SideIcon/>
            </div>
          </>
        ) : (
          <div className='app_login' >
            <img src={GDlogo} alt="Google Drive"/>
            <button onClick={handleLogin} >Log in to Google Drive</button>
          </div>
        )
      }
     
    </div>
  );
}

export default App;