import { CasesItem } from '../components'
import CasesList from '../components/CasesList'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main d-f'>
        <div>
          <h4 className="home-main-above">No LLC Required, No Credit Check.</h4>
          <h1 className="home-main-title">Welcome to YourBank Empowering Your <span>Financial Journey</span></h1>
          <p className="home-main-desc">
            At YourBank, our mission is to provide comprehensive banking solutions
            that empower individuals and businesses to achieve their financial goals.
            We are committed to delivering personalized and innovative services
            that prioritize our customers' needs.
          </p>
          <a href="" className="home-main-open">Open Account</a>
        </div>
        <div><img src="/images/home-main.png" alt="home-main" /></div>
      </main>
      <section className='home-products'>
        <div className="d-f jc-sb">
          <div>
            <h2 className="page-bl-title"><span>Our</span> Products</h2>
            <p className="page-bl-desc">
              Discover a range of comprehensive and customizable banking products
              at YourBank, designed to suit your unique financial needs and aspirations
            </p>
          </div>
          <div className="home-products-tabs d-f">
            <button className='tab-btn tab-btn__active'>For Individuals</button>
            <button className='tab-btn'>For Businesses</button>
          </div>
        </div>
        <div className="home-products-box d-f jc-sb align-center">
          <div className="home-products-item">
            <div><img src="/images/product1.png" alt="product1" /></div>
            <h3 className="products-item-title">Checking Accounts</h3>
            <p className="page-bl-desc">
              Enjoy easy and convenient access to your funds with our range of checking account options.
              Benefit from features such as online and mobile banking, debit cards, and free ATM access.
            </p>
          </div>
          <div className="divider"></div>
          <div className="home-products-item">
            <div><img src="/images/product2.png" alt="product2" /></div>
            <h3 className="products-item-title">Savings Accounts</h3>
            <p className="page-bl-desc">
              Build your savings with our competitive interest rates and flexible
              savings account options. Whether you're saving for a specific goal
              or want to grow your wealth over time, we have the right account for you.
            </p>
          </div>
          <div className="divider"></div>
          <div className="home-products-item">
            <div><img src="/images/product3.png" alt="product3" /></div>
            <h3 className="products-item-title">Loans and Mortgages</h3>
            <p className="page-bl-desc">
              Realize your dreams with our flexible loan and mortgage options.
              From personal loans to home mortgages, our experienced loan officers
              are here to guide you through the application process and help you
              secure the funds you need.
            </p>
          </div>
        </div>
      </section>
      <section className='home-cases'>
        <h2 className="page-bl-title">Use Cases</h2>
        <p className="page-bl-desc">
          At YourBank, we cater to the diverse needs of
          individuals and businesses alike, offering
          a wide range of financial solutions
        </p>
        <div className="home-cases-content d-f align-center">
          <div className="home-cases-box d-f">
            {
              CasesList.filter((elem) => elem.id < 5).map((useCase) => {
                return (
                  <CasesItem
                    key={`case${useCase.id}`}
                    {...useCase}
                  />
                )
              })
            }
          </div>
          <div>
            <h3 className="cases-bl-title">For Individuals</h3>
            <p className="page-bl-desc">
              For individuals, our mortgage services pave the way to homeownership,
              and our flexible personal loans provide vital support during various
              life milestones. We also prioritize retirement planning, ensuring
              a financially secure future for our customers
            </p>
            <div className="home-cases-stats d-f">
              <dl>
                <dt>78%</dt>
                <dd className='page-bl-desc'>Secure Retirement Planning</dd>
              </dl>
              <dl>
                <dt>63%</dt>
                <dd className='page-bl-desc'>Manageable Debt Consolidation</dd>
              </dl>
              <dl>
                <dt>91%</dt>
                <dd className='page-bl-desc'>Reducing financial burdens</dd>
              </dl>
            </div>
            <a href="" className="cases-bl-more">Learn More</a>
          </div>
          <div>
            <h3 className="cases-bl-title">For Business</h3>
            <p className="page-bl-desc">
              For businesses, we empower growth with working capital solutions
              that optimize cash flow, and our tailored financing options fuel
              business expansion. Whatever your financial aspirations, YourBank
              is committed to providing the right tools and support to achieve them
            </p>
            <div className="home-cases-stats d-f">
              <dl>
                <dt>65%</dt>
                <dd className='page-bl-desc'>Cash Flow Management</dd>
              </dl>
              <dl>
                <dt>70%</dt>
                <dd className='page-bl-desc'>Drive Business Expansion</dd>
              </dl>
              <dl>
                <dt>45%</dt>
                <dd className='page-bl-desc'>Streamline payroll processing</dd>
              </dl>
            </div>
            <a href="" className="cases-bl-more">Learn More</a>
          </div>
          <div className="home-cases-box d-f">
            {
              CasesList.filter((elem) => elem.id > 4 && elem.id < 9).map((useCase) => {
                return (
                  <CasesItem
                    key={`case${useCase.id}`}
                    {...useCase}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
      <section className='home-features'>
        <h2 className="page-bl-title"><span>Our</span> Features</h2>
        <p className="page-bl-desc">
          Experience a host of powerful features at YourBank, including
          seamless online banking, secure transactions, and personalized
          financial insights, all designed to enhance your banking experience
        </p>
        <div className="home-features-content d-f">
          <div className="home-features-tabs d-f">
            <button className='tab-btn tab-btn__active'>Online Banking</button>
            <button className='tab-btn'>Financial Tools</button>
            <button className='tab-btn'>Customer Support</button>
          </div>
          <div className="home-features-box d-f">
            <div className="home-features-item">
              <div className="d-f jc-sb">
                <h5 className="features-item-title">24/7 Account Access</h5>
                <div>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.50007 19.9166L19.9167 1.49994M19.9167 1.49994V19.1799M19.9167 1.49994L2.23673 1.49994" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="page-bl-desc">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </p>
            </div>
            <div className="home-features-item">
              <div className="d-f jc-sb">
                <h5 className="features-item-title">Mobile Banking App</h5>
                <div>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.50007 19.9166L19.9167 1.49994M19.9167 1.49994V19.1799M19.9167 1.49994L2.23673 1.49994" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="page-bl-desc">
                Stay connected to your finances on the go with our user-friendly mobile banking app.
                Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.
              </p>
            </div>
            <div className="home-features-item">
              <div className="d-f jc-sb">
                <h5 className="features-item-title">Secure Transactions</h5>
                <div>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.50007 19.9166L19.9167 1.49994M19.9167 1.49994V19.1799M19.9167 1.49994L2.23673 1.49994" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="page-bl-desc">
                Rest assured knowing that your transactions are protected by industry-leading security measures.
                We employ encryption and multi-factor authentication to safeguard your financial information.
              </p>
            </div>
            <div className="home-features-item">
              <div className="d-f jc-sb">
                <h5 className="features-item-title">Bill Pay and Transfers</h5>
                <div>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.50007 19.9166L19.9167 1.49994M19.9167 1.49994V19.1799M19.9167 1.49994L2.23673 1.49994" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="page-bl-desc">
                Save time and avoid late fees with our convenient bill pay service.
                Set up recurring payments or make one-time transfers between your
                accounts with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>
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
  
    </>
  )
}

export default Home