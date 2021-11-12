import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import socialMedia from '../firebase/auth'
import { facebookProvider } from '../firebase/config'
import { fbLoginInitiate } from '../redux/actions/loginAction'
import Home from './Home'
const Login = () => {
    // const handleOnClick = async (provider) => {
    //     let user = await socialMedia(provider)
    //     console.log(user)
    //   }
    // return (
    //     <div>
    //         <button onClick={() => handleOnClick(facebookProvider)}>facebook</button>
    //     </div>
    // )
    const dispatch = useDispatch()
    const handleFBSignin = () => {
        dispatch(fbLoginInitiate())
    }
    const user = useSelector(state => state.user)

    const { loading, currentUser, error } = user
    return (
        <div>
            {
                loading ? "loafing..." : currentUser ? <Home /> : error ? 'error' : (<button onClick={() => handleFBSignin()}>facebook</button>)
            }
        </div>
    )
}

export default Login
