import { Faq } from '../components'
import './css/Careers.css'

const Careers = () => {
    return (
        <>
            <main className='careers-main'>
                <div className="careers-main-inner">
                </div>
                <div className="careers-main-info">
                    <h1 className="page-bl-title">
                        <span>Welcome to</span> YourBank <span> <br /> Careers!</span>
                    </h1>
                    <p className="page-bl-desc">
                        Join our team and embark on a rewarding journey in the banking industry.
                        At YourBank, we are committed to fostering a culture of excellence and
                        providing opportunities for professional growth. With a focus on innovation,
                        customer service, and integrity, we strive to make a positive impact in the
                        lives of our customers and communities. Join us today and be a part of our
                        mission to shape the future of banking.
                    </p>
                </div>
            </main>
            <section className='careers-values'>
                <h2 className="page-bl-title"><span>Our</span> Values</h2>
                <p className="page-bl-desc">
                    At YourBank, our values form the foundation of our organization
                    and guide our actions. We believe in upholding the highest standards
                    of integrity, delivering exceptional service, and embracing innovation.
                    These values define our culture and shape the way we work together to
                    achieve our goals.
                </p>
                <div className="careers-values-box d-f">
                    <div className="careers-values-item">
                        <h3 className="values-item-title">Integrity</h3>
                        <p className="values-item-desc">
                            We conduct ourselves with utmost honesty, transparency,
                            and ethical behavior. We believe in doing what is right
                            for our customers, colleagues, and stakeholders, even
                            when faced with difficult choices.
                        </p>
                    </div>
                    <div className="careers-values-item">
                        <h3 className="values-item-title">Customer Centricity</h3>
                        <p className="values-item-desc">
                            Our customers are at the heart of everything we do.
                            We are dedicated to understanding their needs, providing
                            personalized solutions, and delivering exceptional service
                            that exceeds expectations.
                        </p>
                    </div>
                    <div className="careers-values-item">
                        <h3 className="values-item-title">Collaboration</h3>
                        <p className="values-item-desc">
                            We foster a collaborative and inclusive work environment,
                            where teamwork and diversity are celebrated. By leveraging
                            the unique strengths and perspectives of our employees,
                            we drive innovation and achieve greater success together.
                        </p>
                    </div>
                    <div className="careers-values-item">
                        <h3 className="values-item-title">Innovation</h3>
                        <p className="values-item-desc">
                            We embrace change and constantly seek innovative solutions
                            to meet the evolving needs of our customers. We encourage
                            our employees to think creatively, challenge conventions,
                            and explore new ideas to drive the future of banking.
                        </p>
                    </div>
                </div>
            </section>
            <section className='careers-benefits'>
                <h2 className="page-bl-title"><span>Our</span> Benefits</h2>
                <p className="page-bl-desc">
                    At YourBank, we value our employees and are dedicated to their
                    well-being and success. We offer a comprehensive range of benefits
                    designed to support their personal and professional growth.
                </p>
                <div className="careers-benefits-box d-f">
                    <div className="careers-benefits-item">
                        <div className="benefits-item-heading d-f align-center">
                            <div><img src="/images/benefits1.png" alt="benefits1" /></div>
                            <h5 className="benefits-item-title">Competitive Compensation</h5>
                        </div>
                        <p className="benefits-item-desc">
                            We provide a competitive salary package that recognizes
                            the skills and expertise of our employees. YourBank believes
                            in rewarding exceptional performance and offering opportunities
                            for financial growth.
                        </p>
                    </div>
                    <div><img src="/images/line.png" alt="line" /></div>
                    <div className="careers-benefits-item">
                        <div className="benefits-item-heading d-f align-center">
                            <div><img src="/images/benefits2.png" alt="benefits2" /></div>
                            <h5 className="benefits-item-title">Health and Wellness</h5>
                        </div>
                        <p className="benefits-item-desc">
                            We prioritize the health and well-being of our employees
                            by providing comprehensive medical, dental, and vision
                            insurance plans. We also offer wellness programs, gym memberships,
                            and resources to support a healthy lifestyle.
                        </p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="careers-benefits-box d-f">
                    <div className="careers-benefits-item">
                        <div className="benefits-item-heading d-f align-center">
                            <div><img src="/images/benefits3.png" alt="benefits3" /></div>
                            <h5 className="benefits-item-title">Retirement Planning</h5>
                        </div>
                        <p className="benefits-item-desc">
                            YourBank is committed to helping employees plan for their future.
                            We offer a retirement savings plan with a generous employer match
                            to help them build a secure financial foundation for the long term.
                        </p>
                    </div>
                    <div style={{ marginTop: "-69px" }}><img src="/images/line.png" alt="line" style={{ height: "396px" }} /></div>
                    <div className="careers-benefits-item">
                        <div className="benefits-item-heading d-f align-center">
                            <div><img src="/images/benefits4.png" alt="benefits4" /></div>
                            <h5 className="benefits-item-title">Work-Life Balance</h5>
                        </div>
                        <p className="benefits-item-desc">
                            We understand the importance of maintaining a healthy work-life balance.
                            YourBank offers flexible work arrangements, paid time off, parental leave,
                            and other programs that support employees in managing their personal
                            and professional commitments.
                        </p>
                    </div>
                </div>
            </section>
            <section className="careers-job">
                <h2 className="page-bl-title">Job Openings</h2>
                <p className="page-bl-desc">
                    Explore exciting job openings at YourBank, where we value talent,
                    innovation, and a passion for customer service. Join our team and
                    be part of shaping a brighter future in the banking industry
                </p>
                <div className="careers-job-box d-f">
                    <div className="careers-job-item">
                        <h3 className="job-item-title">Relationship Manager</h3>
                        <div className="job-item-info d-f">
                            <p className="info-bl">Location: India</p>
                            <p className="info-bl">Department: Retail Banking</p>
                        </div>
                        <div className="job-item-content d-f">
                            <div>
                                <h3 className="job-item-title">About This Job</h3>
                                <p className="job-item-desc">
                                    As a Relationship Manager at YourBank, you will be responsible
                                    for developing and maintaining relationships with our valued customers.
                                    You will proactively identify their financial needs and offer tailored
                                    solutions to help them achieve their goals. We are seeking individuals
                                    with excellent communication skills, a strong sales acumen, and a passion
                                    for delivering exceptional customer service.
                                </p>
                            </div>
                            <div>
                                <h3 className="job-item-title">Requirements & Qualifications</h3>
                                <ul className="job-item-list">
                                    <li> Bachelor's degree in Business, Finance, or a related field</li>
                                    <li>Minimum of 3 years of experience in sales or relationship management in the banking industry</li>
                                    <li>Proven track record of meeting and exceeding sales targets</li>
                                    <li>Excellent interpersonal and negotiation skills</li>
                                    <li>Strong knowledge of banking products and services</li>
                                </ul>
                            </div>
                        </div>
                        <a href="" className="job-item-apply">Apply now</a>
                    </div>
                    <div className="careers-job-item">
                        <h3 className="job-item-title">Risk Analyst</h3>
                        <div className="job-item-info d-f">
                            <p className="info-bl">Location: India</p>
                            <p className="info-bl">Department: Risk Management</p>
                        </div>
                        <div className="job-item-content d-f">
                            <div>
                                <h3 className="job-item-title">About This Job</h3>
                                <p className="job-item-desc">
                                    As a Risk Analyst at YourBank, you will play a vital role
                                    in identifying and assessing potential risks to our organization.
                                    You will analyze data, conduct risk assessments, and develop strategies
                                    to mitigate risks. We are looking for detail-oriented individuals with
                                    strong analytical skills and a solid understanding of risk management principles.
                                </p>
                            </div>
                            <div>
                                <h3 className="job-item-title">Requirements & Qualifications</h3>
                                <ul className="job-item-list">
                                    <li>Bachelor's degree in Finance, Economics, or a related field</li>
                                    <li>Minimum of 2 years of experience in risk management or a similar role</li>
                                    <li>Proficiency in risk analysis tools and techniques</li>
                                    <li>Strong analytical and problem-solving skills</li>
                                    <li>Knowledge of regulatory requirements and industry best practices</li>
                                </ul>
                            </div>
                        </div>
                        <a href="" className="job-item-apply">Apply now</a>
                    </div>
                    <div className="careers-job-item">
                        <h3 className="job-item-title">IT Security Specialist</h3>
                        <div className="job-item-info d-f">
                            <p className="info-bl">Location: India</p>
                            <p className="info-bl">Department: Information Technology</p>
                        </div>
                        <div className="job-item-content d-f">
                            <div>
                                <h3 className="job-item-title">About This Job</h3>
                                <p className="job-item-desc">
                                    As an IT Security Specialist at YourBank, you will be responsible
                                    for ensuring the security and integrity of our information systems.
                                    You will develop and implement security protocols, conduct vulnerability
                                    assessments, and respond to security incidents. We are seeking individuals
                                    with a strong technical background, knowledge of cybersecurity best practices,
                                    and a commitment to maintaining the confidentiality of customer data.
                                </p>
                            </div>
                            <div>
                                <h3 className="job-item-title">Requirements & Qualifications</h3>
                                <ul className="job-item-list">
                                    <li>Bachelor's degree in Computer Science, Information Security, or a related field</li>
                                    <li>Minimum of 5 years of experience in IT security or a similar role</li>
                                    <li>In-depth knowledge of network security protocols and technologies</li>
                                    <li>Familiarity with regulatory frameworks such as PCI DSS and GDPR</li>
                                    <li>Professional certifications such as CISSP or CISM are preferred</li>
                                </ul>
                            </div>
                        </div>
                        <a href="" className="job-item-apply">Apply now</a>
                    </div>
                </div>
            </section>
            <Faq />
            <section className='home-cta d-f jc-sb align-center'>
                <div>
                    <h2 className="page-bl-title"><span>Start your Career with</span> YourBank today!</h2>
                    <p className="page-bl-desc">
                        Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. 
                        Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.
                    </p>
                </div>
                <a href="" className='home-cta-open'>Open Account</a>
            </section>
        </>
    )
}

export default Careers