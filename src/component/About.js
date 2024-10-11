import React from 'react';

export default function About() {
    return (
        <div className='container mt-5 mb-5 about' id='about'>
            <div>
                <h2>About</h2>
                <p className='about-p'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className='d-flex mt-5 justify-content-center align-items-center'>
                <div>
                    <img src='/my-profile-img.jpg' alt='8*8' style={{ maxWidth: "100%", height: "auto" }} className='img-about'  />
                </div>
                <div style={{ marginLeft: "20px" }}>
                    <h2 className='about-h2'>UI/UX Designer & Web Developer.</h2>
                    <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='col-md-6 col-sm-12 p-3 '>
                        <div >
                            <ul className='about-ul'>
                                <li className='od-m-about'>
                                    <strong>Birthday:</strong>
                                    <span  className='strong-about'>21 jan 1999</span>
                                </li>
                                <li  className='od-m-about'>
                                    <strong>Website:</strong>
                                    <span  className='strong-about'>www.example.com</span>
                                </li>
                                <li  className='od-m-about'>
                                    <strong>Phone:</strong>
                                    <span  className='strong-about'>+963 935694650</span>
                                </li>
                                <li  className='od-m-about'>
                                    <strong>City:</strong>
                                    <span  className='strong-about'>Syria, Swida</span>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <ul className='about-ul'>
                                <li  className='od-m-about'>
                                    <strong>Age:</strong>
                                    <span className='strong-about'>30</span>
                                </li>
                                <li  className='od-m-about'>
                                    <strong>Degree:</strong>
                                    <span className='strong-about'>Master</span>
                                </li>
                                <li  className='od-m-about'>
                                    <strong>Email:</strong>
                                    <span className='strong-about'>odesamara99@gmail.com</span>
                                </li>
                                <li  className='od-m-about'>
                                    <strong>Freelance:</strong>
                                    <span className='strong-about'>Available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className='about-p'>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                    </p>
                </div>
            </div>
        </div>
    )
}