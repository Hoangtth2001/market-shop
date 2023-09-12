import React from 'react'
import { Card } from '../../components'
import styles from './auth.module.scss'
import { Link } from 'react-router-dom'
import resetImg from '../../assets/forgot.png'
function Reset() {
    return (
        <section className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <h2>Reset Password</h2>

                    <form>
                        <input type='text' placeholder='Email' required />

                        <button className='--btn --btn-primary --btn-block'>Reset Password</button>
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
    )
}

export default Reset