import React,{ useEffect } from 'react';
import { BrowserRouter as Router ,Routes, Route, Navigate } from 'react-router-dom';

// Using AOS for animation

// Components
import GlobalStyle from './globalstyles';
import Home from './components/home';
import ModelS from './components/Model-S';
import Model3 from './components/Model-3';
import ModelX from './components/Model-X';
import ModelY from './components/Model_Y';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';

import { useSelector,useDispatch } from 'react-redux';
import { selectUser,login,logout } from './features/userSlice';
import { auth } from './components/firebase';

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path="/models" element={<ModelS/>} />
          <Route path="/model3" element={<Model3/>} />
          <Route path="/modelx" element={<ModelX/>} />
          <Route path="/modely" element={<ModelY/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route 
            path="/teslaaccount" 
            element={
              <main>
                {user ? <Account/> : <Navigate to='/login'/>}
              </main>
            }
          />
          <Route 
            path="/login" 
            element={
              <main>
                {user ? <Navigate to='/teslaaccount'/> : <Login/>}
              </main>
            } 
          />

        </Routes>

        <GlobalStyle/>
      </div>
    </Router>
  );
}

export default App;