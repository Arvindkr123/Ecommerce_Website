import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ImYoutube, ImSpotify } from 'react-icons/im'
import { SiFacebook } from 'react-icons/si'
import { auth, fs } from '../config/FirebaseConfig'

const SignUp = () => {
    const [fulllName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();

    const handleSignUP = async (e) => {
        try {
            e.preventDefault();
            console.log(fulllName, email, password)
            const credentials = await auth.createUserWithEmailAndPassword(email, password);
            console.log(credentials)
            // now create the users collections
            await fs.collection('users').doc(credentials.user.uid).set({
                FullName: fulllName,
                Email: email,
                Password: password
            })
            setSuccessMsg('Signup Successfull. You will now automatically get redirected to Login');
            setFullName();
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(() => {
                setSuccessMsg('');
                navigate('/products');
            }, 3000)
        } catch (error) {
            setErrorMsg(error.message)
        }
    }
    return (
        <div>
            <div className='container m-4 m-auto'>
                <br /><br />
                <br /><br />
                <h1>Sign Up</h1>
                <hr />
                {successMsg && <>
                    <div className='success-msg'>{successMsg}</div>
                    <br></br>
                </>}
                <form className='form-group' autoComplete='off' onSubmit={handleSignUP}>
                    <label>Full Name</label>
                    <input value={fulllName} onChange={(e) => setFullName(e.target.value)} type="text" className='form-control' required />
                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='form-control' required />
                    <label>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='form-control' required />
                    <br /><br />
                    <div className="btn-box">
                        <span>Already have an account Login <Link to='/login' className='link'>here</Link></span>
                        <button type='submit' className='btn btn-success btn-md text-uppercase'>Sign Up</button>
                    </div>
                </form>
                {errorMsg && <>
                    <br></br>
                    <div className='error-msg'>{errorMsg}</div>
                </>}
            </div>
            <footer className='bg-info mt-3 h-75 overflow-hidden'>
                <ul className='d-flex justify-content-evenly align-content-center'>
                    <li className='p-5 display-4 list-group-item' style={{ fontFamily: 'italic', color: 'white' }}>The Generics</li>
                    <li className='mt-5 list-group-item'><Link to="https://www.youtube.com"><ImYoutube size={'60px'} /></Link></li>
                    <li className='mt-5 list-group-item'><Link to="https://www.spotify.com"><ImSpotify size={'60px'} /></Link></li>
                    <li className='mt-5 list-group-item'><Link to="https://www.facebook.com"><SiFacebook size={'60px'} /></Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default SignUp;