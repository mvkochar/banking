const Faq = () => {
    return (
        <section className='home-faq'>
            <h2 className="page-bl-title">Frequently <span>Asked Questions</span></h2>
            <p className="page-bl-desc">
                Still you have any questions? Contact our Team via &nbsp;
                <a href="mailto:support@yourbank.com">support@yourbank.com</a>
            </p>
            <div className="home-faq-box d-f">
                <div className="home-faq-item">
                    <h5 className="faq-item-question">How do I open an account with YourBank?</h5>
                    <p className="faq-item-answer">
                        Opening an account with YourBank is easy. Simply visit our website
                        and click on the "Open an Account" button. Follow the prompts, provide
                        the required information, and complete the application process. If you
                        have any questions or need assistance, our customer support team is available
                        to help.
                    </p>
                </div>
                <div className="home-faq-item">
                    <h5 className="faq-item-question">What documents do I need to provide to apply for a loan?</h5>
                    <p className="faq-item-answer">
                        The documents required for a loan application may vary depending
                        on the type of loan you are applying for. Generally, you will need
                        to provide identification documents (such as a passport or driver's license),
                        proof of income (such as pay stubs or tax returns), and information about
                        the collateral (if applicable). Our loan officers will guide you through
                        the specific requirements during the application process.
                    </p>
                </div>
                <div className="home-faq-item">
                    <h5 className="faq-item-question">How can I access my accounts online?</h5>
                    <p className="faq-item-answer">
                        Accessing your accounts online is simple and secure. Visit our website and
                        click on the "Login" button. Enter your username and password to access your accounts.
                        If you haven't registered for online banking, click on the "Enroll Now" button and
                        follow the registration process. If you need assistance, our customer support team
                        is available to guide you.
                    </p>
                </div>
                <div className="home-faq-item">
                    <h5 className="faq-item-question">Are my transactions and personal information secure?</h5>
                    <p className="faq-item-answer">
                        At YourBank, we prioritize the security of your transactions and personal information.
                        We employ industry-leading encryption and multi-factor authentication to ensure that
                        your data is protected. Additionally, we regularly update our security measures to stay
                        ahead of emerging threats. You can bank with confidence knowing that we have robust
                        security systems in place.
                    </p>
                </div>
            </div>
            <button className='home-faq-load'>Load All FAQ's</button>
        </section>
    )
}

export default Faq