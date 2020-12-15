import React, { useState, useEffect} from 'react'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import User from './User'


function UsersList() {
    const howManyUsers = 10;
    const arr = Array(howManyUsers).fill()
    const [usersList, setUsersList] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${howManyUsers}`)
        .then((response) => response.json())
        .then((data) => {
            setTimeout(() => {
                setUsersList(data.results)
                setLoading(false)
            }, 6000);
        })
        .catch((error) => {
            setError(true)
            setLoading(false)
        })
    }, [])

    const isLoadingData = (key) => {
        return <ReactPlaceholder key={`ph-${key}`} className="userlist-container placeholder" ready={!isLoading} rows={9} type='media' />
    }

    return (
      <>
        <h1>UsersList</h1>
        {isError && <p className="error">An error has occurred</p>}
        <div className="list-wrapper borderTop" >
                {isLoading && arr.map((value, key) => isLoadingData(key))}
                {usersList.map((value, id) => (
                    <User key={`${id}-${value.name.first}`} value={value} />
                ))}
        </div>
      </>
    )
}

export default UsersList

