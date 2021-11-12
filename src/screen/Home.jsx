import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fbLogoutInitiate } from '../redux/actions/logoutActions'
const Home = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleFBSignOut = () => {
        dispatch(fbLogoutInitiate())
    }
    const { currentUser } = user
    return (
        <div>
            <h1>Welcome</h1>
            <img src={currentUser.photoURL} alt="*" />
            <p>{currentUser.email}</p>
            <p>{currentUser.displayName}</p>
            <button onClick={() => handleFBSignOut()}>Logout</button>
        </div>
    )
}

export default Home
