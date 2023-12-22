import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';
import ModalVideo from 'react-modal-video';

const MainBanner = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (     
        <React.Fragment>
            <div className="main-banner-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="">
                            {/* <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner-text">
                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <span>Instant Doctor Consultation</span>
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <h1>Doctors Are Online. It’s your turn now.</h1>
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <p>India’s largest patient outreach program is starting soon. XpressCure will provide on-demand specialist doctor consultation to the most underserved patients.</p>
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <div className="banner-btn">
                                                <Link href="/appointment">
                                                    <a className="default-btn">
                                                        Book An Appointment
                                                    </a>
                                                </Link>
                
                                                <div
                                                    onClick={e => {e.preventDefault(); openModal()}}
                                                    className="default-btn active popup-youtube"
                                                > 
                                                    Play Now
                                                </div>
                                            </div>
                                        </ReactWOW>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 pr-0">
                                    <div className="banner-img-wrap">
                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <div className="banner-img">
                                                <img src="/img/home-one/home-one-banner.png" alt="Image" />
                                            </div>
                                        </ReactWOW>
                                        <div className="banner-shape">
                                            <img src="/img/home-one/home-one-shape.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="first-facility-area">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="first-facility-item">
                                            <i className="flaticon-care"></i>
                                            <h3>Digital Clinics</h3>
                                            <p>Health workers - become a Doctor Mitra today, enhance your dignity.</p>
                                        </div>
                                    </div>
                
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="first-facility-item">
                                            <i className="flaticon-support"></i>
                                            <h3>On-Demand Consultation</h3>
                                            <p>Consult with the best doctors, on-demand.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                                        <div className="first-facility-item">
                                            <i className="flaticon-online-learning"></i>
                                            <h3>Doctors Serve Online</h3>
                                            <p>Doctors, reach out to patients in the remotest corners of India, at zero investment.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="shape">
                                    <img src="/img/shape/shape1.png" alt="Image" />
                                </div>
                            </div> */}
                             <video className="depicter-bg-video" width="100%" height="100%" autoPlay loop muted>
        <source src="https://bttc.com.au/wp-content/uploads/2021/01/bttc_2021.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment> 
    )
}

export default MainBanner;