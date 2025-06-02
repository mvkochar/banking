import './css/About.css'

const About = () => {
    return (
        <>
            <main className='about-main d-f'>
                <div className="about-main-info">
                    <h4 className="about-main-above">Welcome to YourBank</h4>
                    <h1 className="page-bl-title"><span>Where Banking Meets</span><br />Excellence!</h1>
                    <p className="page-bl-desc">
                        At YourBank, we believe that banking should be more than just transactions.
                        It should be an experience that empowers individuals and businesses to thrive
                        and reach their financial goals. As a trusted financial institution, we are
                        committed to delivering exceptional banking services that go beyond expectations.
                        With a focus on innovation, personalized solutions, and unwavering integrity,
                        we strive to provide the best banking experience for our valued customers.
                        Join us on this exciting journey and discover a new level of banking excellence.
                    </p>
                </div>
                <div className='about-main-img'><img src="/images/about-main.png" alt="avout-main" /></div>
            </main>
            <section className='about-info'>
                <h2 className="page-bl-title">Mission & Vision</h2>
                <p className="page-bl-desc">
                    We envision being a leading force in the industry, driven by innovation,
                    integrity, and inclusivity, creating a brighter financial future for individuals
                    and businesses while maintaining a strong commitment to customer satisfaction
                    and community development
                </p>
                <div className="about-info-content">
                    <div className="about-info-bl d-f align-center">
                        <div><img src="/images/about-info1.png" alt="about-info1" /></div>
                        <div className="info-bl-text">
                            <h3 className="info-bl-title">Mission</h3>
                            <p className="page-bl-desc">
                                At YourBank, our mission is to empower our customers to achieve financial success.
                                We are dedicated to delivering innovative banking solutions that cater to their unique
                                needs. Through personalized services, expert guidance, and cutting-edge technology,
                                we aim to build strong, lasting relationships with our customers. Our mission is
                                to be their trusted partner, helping them navigate their financial journey and
                                realize their dreams.
                            </p>
                        </div>
                    </div>
                    <div className="about-info-bl d-f align-center">
                        <div className="info-bl-text">
                            <h3 className="info-bl-title">Vision</h3>
                            <p className="page-bl-desc">
                                Our vision at YourBank is to redefine banking by creating
                                a seamless and personalized experience for our customers.
                                We envision a future where banking is accessible, transparent,
                                and tailored to individual preferences. Through continuous innovation
                                and collaboration, we strive to be at the forefront of the industry,
                                setting new standards for customer-centric banking. Our vision is to be
                                the preferred financial institution, known for our unwavering commitment
                                to excellence, trust, and customer satisfaction.
                            </p>
                        </div>
                        <div><img src="/images/about-info2.png" alt="about-info2" /></div>
                    </div>
                </div>
            </section>
            <section className="about-press">
                <h2 className="page-bl-title">Press Releases</h2>
                <p className="page-bl-desc">
                    Stay updated with the latest happenings and exciting
                    developments at YourBank through our press releases.
                </p>
                <div className="about-press-box d-f">
                    <div className="about-press-card">
                        <div><img src="/images/press1.png" alt="press1" /></div>
                        <h3 className="press-card-title">
                            YourBank Launches New Rewards Program
                            to Enhance Customer Loyalty and Satisfaction
                        </h3>
                        <div className="press-card-meta d-f">
                            <div className='card-meta-bl'>Location: India</div>
                            <div className="card-meta-bl">Date: 06/11/2024</div>
                        </div>
                        <p className="page-bl-desc">
                            YourBank is pleased to announce the introduction of our new
                            Rewards Program, aimed at rewarding our loyal customers and
                            enhancing their banking experience. The program offers exclusive
                            benefits, discounts, and personalized offers tailored to individual
                            customer preferences. With this initiative, YourBank reaffirms its
                            commitment to delivering exceptional value and building lasting
                            relationships with our valued customers.
                        </p>
                    </div>
                    <div className="about-press-card">
                        <div><img src="/images/press2.png" alt="press2" /></div>
                        <h3 className="press-card-title">
                            YourBank Expands Branch Network with Opening of New Location in Chennai
                        </h3>
                        <div className="press-card-meta d-f">
                            <div className='card-meta-bl'>Location: India</div>
                            <div className="card-meta-bl">Date: 12/11/2024</div>
                        </div>
                        <p className="page-bl-desc">
                            YourBank is excited to announce the grand opening of our newest branch in [City].
                            This expansion is a testament to our continued commitment to serving our customers
                            and providing them with convenient access to our comprehensive range of banking services.
                            The new branch will feature state-of-the-art facilities, a team of dedicated professionals,
                            and a personalized approach to banking, further strengthening our presence in the local community.
                        </p>
                    </div>
                    <div className="about-press-card">
                        <div><img src="/images/press3.png" alt="press3" /></div>
                        <h3 className="press-card-title">
                            YourBank Partners with Local Nonprofit to
                            Support Financial Education Initiatives
                        </h3>
                        <div className="press-card-meta d-f">
                            <div className='card-meta-bl'>Location: India</div>
                            <div className="card-meta-bl">Date: 24/12/2024</div>
                        </div>
                        <p className="page-bl-desc">
                            YourBank is excited to unveil our new Sustainable Banking Initiative,
                            demonstrating our commitment to environmental responsibility.
                            This initiative includes a range of sustainable banking products
                            and services, such as green loans, eco-friendly investment options,
                            and paperless banking solutions. By incorporating sustainable practices
                            into our operations, we aim to contribute to a greener future while providing
                            innovative banking solutions to our customers.
                        </p>
                    </div>
                    <div className="about-press-card">
                        <div><img src="/images/press4.png" alt="press4" /></div>
                        <h3 className="press-card-title">
                            YourBank Launches Sustainable Banking Initiative
                            to Promote Environmental Responsibility
                        </h3>
                        <div className="press-card-meta d-f">
                            <div className='card-meta-bl'>Location: India</div>
                            <div className="card-meta-bl">Date: 28/12/2024</div>
                        </div>
                        <p className="page-bl-desc">
                            YourBank is excited to unveil our new Sustainable Banking Initiative, 
                            demonstrating our commitment to environmental responsibility. This initiative 
                            includes a range of sustainable banking products and services, such as green 
                            loans, eco-friendly investment options, and paperless banking solutions. 
                            By incorporating sustainable practices into our operations, we aim to contribute 
                            to a greener future while providing innovative banking solutions to our customers.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About