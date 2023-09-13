import React, { useState } from 'react'
import { Card, Loader } from '../../components'
import styles from './auth.module.scss'
import { Link } from 'react-router-dom'
import resetImg from '../../assets/forgot.png'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
function Reset() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleResetPassword = (e) => {
        e.preventDefault()
        setIsLoading(true)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setIsLoading(false)
                toast.success('Check your email for a reset link')
            })
            .catch((error) => {
                setIsLoading(false)
                toast.error(error.message)
            });
    }
    return (
        <>
            {isLoading && <Loader />}
            <section className={`container ${styles.auth}`}>
                <Card>
                    <div className={styles.form}>
                        <h2>Reset Password</h2>

                        <form onSubmit={handleResetPassword}>
                            <input type='text' placeholder='Email' required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>
                            <div className={styles.links}>
                                <p>
                                    <Link to='/login'>- Login</Link>
                                </p>
                                <p>
                                    <Link to='/register'>Register -</Link>
                                </p>
                            </div>
                        </form>

                    </div>
                </Card>
                <div className={styles.img}>
                    <img src={resetImg} alt='reset' width={400} />
                </div>
            </section>
        </>
    )
}

export default Reset