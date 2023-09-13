import React, { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { Card, Loader } from '../../components'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import { provider } from '../../firebase/config'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const loginUser = (e) => {
        e.preventDefault()
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/')
                setIsLoading(false)
                toast.success('Login Successful!')

            })
            .catch((error) => {
                setIsLoading(false)
                toast.error('Wrong Email or Password!')
            });
    }
    const signInWithGoogle = (e) => {
        e.preventDefault()
        setIsLoading(true)

        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                console.log(user);
                navigate('/')
                setIsLoading(false)
                toast.success('Login Successful!')

            }).catch((error) => {
                setIsLoading(false)
                toast.error(error.message)
            });

    }
    return (
        <>
            <ToastContainer />
            {isLoading && <Loader />}
            <section className={`container ${styles.auth}`}>
                <div className={styles.img}>
                    <img src={loginImg} alt='login' width={400} />
                </div>
                <Card>
                    <div className={styles.form}>
                        <h2>Login</h2>

                        <form onSubmit={loginUser}>
                            <input type='text' placeholder='Email' required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type='password' placeholder='Password' required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
                            <div className={styles.links}>
                                <Link to='/reset'>Reset Password</Link>
                            </div>
                            <p>-- or --</p>
                        </form>

                        <button onClick={signInWithGoogle} className={`--btn --btn-danger --btn-block ${styles.logingg}`}><FaGoogle size={15} color='#fff' /> Login With Google</button>
                        <span className={styles.register}>
                            <p>Don't have an account?</p>
                            <Link to='/register'>Register</Link>
                        </span>
                    </div>
                </Card>
            </section>
        </>
    )
}

export default Login