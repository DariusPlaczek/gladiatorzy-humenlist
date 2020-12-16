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
//  const windowHeight = window.innerHeight;


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

    return () =>  window.removeEventListener("scroll", scrollY);
  //  console.log(document.body.offsetHeight);
  //  console.log(window.innerHeight);
  //  console.log(window.scrollY);
  //  console.log(window.innerHeight + window.scrollY);
  //  console.log((window.innerHeight + window.scrollY) >= document.body.offsetHeight);
  })

  const scrollY = () => {
    setScroll((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
    console.log((window.innerHeight + window.scrollY) >= document.body.offsetHeight);
  }

  useEffect(() => {
    if (scroll) {
      setCountImages((prevState) => prevState + 3)
    }
  }, [scroll])

  useEffect(() => {
    const cacheUser = [];

    if (!scroll || isLoading) {
      return
    }

    for (let i = 0; i < countImages; i++) {
      cacheUser.push(users[i])
    }

    setUserlist(cacheUser)
  }, [scroll, isLoading])


  return (

      <div className="content">
          <h1>UsersList</h1>
          {isError && <p className="error">An error has occurred</p>}
          <div className="list-wrapper borderTop" >
                  {userlist && userlist.map((value, id) => (
                      <User key={`${id}-${value.name.first}`} value={value} />
                  ))}
          </div>
      </div>

  );
}

export default App;
