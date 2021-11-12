import { firebase } from './config'

const socialMedia = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
            return res.user
        })
        .catch(err => {
            return err
        })

}

export default socialMedia;
