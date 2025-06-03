import React from 'react'
import './css/Login.css'

const Login = () => {
    const [showPwd, setShowPwd] = React.useState(false)
    const handlePwd = () => {
        setShowPwd((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <>
            <main className='login-main'>
                <h1 className="page-bl-title text-center">Login</h1>
                <p className="page-bl-desc">
                    Welcome back! Please log in to access your account.
                </p>
                <form action="" className="login-main-fm">
                    <div className="input-bl d-f">
                        <div>
                            <input type="email" name="loginEmail" placeholder='Enter your Email' />
                        </div>
                        <div className='input-wr'>
                            <input type={showPwd ? "text" : "password"} name="loginPwd" placeholder='Enter your Password' />
                            <button type='button' className='btn-clear d-b' onClick={handlePwd}>
                                <img src="/images/eye.png" alt="eye" />
                            </button>
                        </div>
                    </div>
                    <a href="" className="forgot-link">Forgot Password?</a>
                    <button type="button" className='login-btn'>Login</button>
                    <a href="" className="sign-link">Sign Up</a>
                </form>
                <div className="login-main-social">
                    <h5 className="social-title">Or Continue with</h5>
                    <div className="social-box d-f">
                        <a href="" className="d-b">
                            <img src="/images/google.png" alt="Google" />
                        </a>
                        <a href="" className="d-b">
                            <img src="/images/facebook2.png" alt="Facebook" />
                        </a>
                        <a href="" className="d-b">
                            <img src="/images/apple.png" alt="Apple" />
                        </a>
                    </div>
                </div>
            </main>
            <section className='home-testimonials login-testimonials'>
                <div className="d-f jc-sb">
                    <div>
                        <h2 className="page-bl-title"><span>Our</span> Testimonials</h2>
                        <p className="page-bl-desc">
                            Discover how YourBank has transformed lives with innovative digital solutions
                            and personalized customer service. See why our clients trust us for a secure
                            and prosperous financial journey
                        </p>
                    </div>
                    <div className="home-testimonials-tabs d-f">
                        <button className='tab-btn tab-btn__active'>For Individuals</button>
                        <button className='tab-btn'>For Businesses</button>
                    </div>
                </div>
                <div className="home-testimonials-content d-f align-center">
                    <button className='btn-clear d-b'>
                        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="61" height="61" rx="30.5" fill="#1C1C1C" />
                            <rect x="0.5" y="0.5" width="61" height="61" rx="30.5" stroke="#262626" />
                            <path d="M40.2083 31H22.5M22.5 31L31 22.5M22.5 31L31 39.5" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div className="home-testimonials-box d-f">
                        <div className="home-testimonials-item">
                            <div><img src="/images/quote.png" alt="quote" /></div>
                            <p className="testimonials-item-desc">
                                YourBank has been my trusted financial partner for years.
                                Their personalized service and innovative digital banking
                                solutions have made managing my finances a breeze.
                            </p>
                            <h5 className="testimonials-item-name">Sara T</h5>
                        </div>
                        <div className="home-testimonials-item">
                            <div><img src="/images/quote.png" alt="quote" /></div>
                            <p className="testimonials-item-desc">
                                I recently started my own business, and YourBank has been instrumental
                                in helping me set up my business accounts and secure the financing I needed.
                                Their expert guidance and tailored solutions have been invaluable.
                            </p>
                            <h5 className="testimonials-item-name">John D</h5>
                        </div>
                        <div className="home-testimonials-item">
                            <div><img src="/images/quote.png" alt="quote" /></div>
                            <p className="testimonials-item-desc">
                                I love the convenience of YourBank's mobile banking app.
                                It allows me to stay on top of my finances and make transactions on the go.
                                The app is user-friendly and secure, giving me peace of mind.
                            </p>
                            <h5 className="testimonials-item-name">Emily G</h5>
                        </div>
                    </div>
                    <button className='btn-clear d-b'>
                        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="61" height="61" rx="30.5" fill="#1C1C1C" />
                            <rect x="0.5" y="0.5" width="61" height="61" rx="30.5" stroke="#262626" />
                            <path d="M22.5002 31H40.2085M40.2085 31L31.7085 22.5M40.2085 31L31.7085 39.5" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Login