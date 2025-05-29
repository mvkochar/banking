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
    </>
  )
}

export default Home