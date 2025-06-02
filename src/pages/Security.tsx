import { Faq } from "../components"
import "./css/Security.css"

const Security = () => {
    return (
        <>
            <main className='security-main d-f'>
                <div className="security-main-info">
                    <h1 className="page-bl-title"><span>Your Security is Our</span> Top Priority</h1>
                    <p className="page-bl-desc">
                        At YourBank, we understand the importance of keeping your
                        financial information secure. We employ robust security
                        measures and advanced technologies to protect your personal
                        and financial data. Rest assured that when you bank with us,
                        your security is our utmost priority.
                    </p>
                </div>
                <div className='security-main-img'><img src="/images/security-main.png" alt="security-main" /></div>
            </main>
            <section className="security-protect">
                <h2 className="page-bl-title"><span>How We</span> Protect You</h2>
                <p className="page-bl-desc">
                    At YourBank, we prioritize the security and confidentiality
                    of your financial information. Our state-of-the-art encryption
                    technology and stringent data protection measures ensure your
                    assets and transactions are safeguarded at all times
                </p>
                <div className="security-protect-box d-f">
                    <div className="security-protect-card">
                        <div className="protect-card-heading d-f align-center">
                            <div><img src="/images/protect1.png" alt="protect1" /></div>
                            <h3 className="protect-card-title">Secure Online Banking Platform</h3>
                        </div>
                        <p className="page-bl-desc">
                            Our online banking platform is built with multiple layers of security
                            to safeguard your information. We utilize industry-standard encryption
                            protocols to ensure that your data remains confidential and protected
                            during transmission.
                        </p>
                    </div>
                    <div className="security-protect-card">
                        <div className="protect-card-heading d-f align-center">
                            <div><img src="/images/protect2.png" alt="protect2" /></div>
                            <h3 className="protect-card-title">Multi-Factor Authentication</h3>
                        </div>
                        <p className="page-bl-desc">
                            To enhance the security of your online banking experience,
                            we employ multi-factor authentication. This additional
                            layer of security requires you to provide multiple pieces
                            of identification, such as a password and a one-time verification
                            code, to access your account.
                        </p>
                    </div>
                    <div className="security-protect-card">
                        <div className="protect-card-heading d-f align-center">
                            <div><img src="/images/protect3.png" alt="protect3" /></div>
                            <h3 className="protect-card-title">Fraud Monitoring</h3>
                        </div>
                        <p className="page-bl-desc">
                            We have sophisticated fraud detection systems in place
                            to monitor your accounts for any suspicious activities.
                            Our dedicated team works around the clock to detect and
                            prevent unauthorized transactions, providing you with peace of mind.
                        </p>
                    </div>
                    <div className="security-protect-card">
                        <div className="protect-card-heading d-f align-center">
                            <div><img src="/images/protect4.png" alt="protect4" /></div>
                            <h3 className="protect-card-title">Secure Mobile Banking</h3>
                        </div>
                        <p className="page-bl-desc">
                            Our mobile banking app is designed with the same level 
                            of security as our online banking platform. You can confidently 
                            access your accounts, make transactions, and manage your finances 
                            on the go, knowing that your information is protected.
                        </p>
                    </div>
                </div>
            </section>
            <div className="security-faq">
                <Faq/>
            </div>
        </>
    )
}

export default Security