import React, { useState, useEffect } from 'react';
import './App.css';

import User from './components/User';

function App() {

  const [scroll, setScroll] = useState(true)
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [userlist, setUserlist] = useState([])
  const [countImages, setCountImages] = useState(4)


  useEffect(() => {
    fetch('http://localhost:3000/userData.json')
    .then(response => response.json())
    .then((userData )=> {
      setUsers(userData);
      setLoading(false);
    })
    .catch((error) => {
      setError(true)
      setLoading(false)
  })
  }, [])

  useEffect(() => {

    function name() {
      window.addEventListener("scroll", scrollY)
    }
    name();

  //  console.log(document.body.offsetHeight);
  //  console.log(window.innerHeight);
  //  console.log(window.scrollY);
  //console.log(window.innerHeight + window.scrollY);
    return () =>  window.removeEventListener("scroll", scrollY);

  }, [])


  const scrollY = () => {
  //  console.log(document.body.scrollHeight);
    setScroll((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100)
  }

  useEffect(() => {

    if (scroll) {
      setCountImages((prevState) => prevState + 1)
    }
  }, [scroll])

  useEffect(() => {

    if (!scroll || isLoading ) {
      return
    }

    setUserlist(users && users.slice(0, countImages))

  }, [scroll, isLoading, users, countImages])



  return (
    
    <div className="main-container">
    <div id="contents" className="content">
          <h1>UsersList</h1>
          {isError && <p className="error">An error has occurred</p>}
          <div className="list-wrapper borderTop" >
                  {userlist && userlist.map((value, id) => (
                    <User key={`${id}-${value.name.first}`} value={value} />
                    ))}
          </div>
      </div>
      </div>
  );
}

export default App;
