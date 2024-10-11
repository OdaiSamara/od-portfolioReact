import React from "react";

export default function Contact() {
    return (
        <div className='container mt-5 mb-5' id="contact">
            <div>
                <h2>Contact</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="row gy-4 od-width">

                <div className="col-lg-5">

                    <div className="info-wrap">
                        <div className="info-item d-flex   " >
                            <div style={{

                                color: "skyblue",
                                background: "#ddd",
                                width: "44px",
                                height: "44px",
                                display: "flex",
                                padding: "10px",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50px",
                                marginRight: "15px",
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16" >
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                            </div>
                            <div>
                                <h3>Address</h3>
                                <p>A105 Adam Street, Syria, sy 1300</p>
                            </div>
                        </div>

                        <div className="info-item d-flex" >
                            <div style={{

                                color: "skyblue",
                                background: "#ddd",
                                width: "44px",
                                height: "44px",
                                display: "flex",
                                padding: "10px",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50px",
                                marginRight: "15px",
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-telephone " viewBox="0 0 16 16" >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>
                            <div>
                                <h3>Call Us</h3>
                                <p>+963 935694650</p>
                            </div>
                        </div>

                        <div className="info-item d-flex">
                            <div style={{

                                color: "skyblue",
                                background: "#ddd",
                                width: "44px",
                                height: "44px",
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50px",
                                marginRight: "15px",
                            }}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope " viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>

                            </div>
                            <div>
                                <h3>Email Us</h3>
                                <p>odesamara99@gmail.com</p>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26856.100346769927!2d36.5625344!3d32.7122944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1728400176628!5m2!1sar!2s" frameborder="0" style={{ border: "0", width: "100%", height: "230px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="location"></iframe>
                    </div>
                </div>

                <div className="col-lg-7">
                    <form >
                        <div className="row gy-4 od-width">

                            <div className="col-md-6">
                                <label for="name-field" className="pb-2">Your Name</label>
                                <input type="text" name="name" id="name-field" className="od-input" required="" />
                            </div>

                            <div className="col-md-6">
                                <label for="email-field" className="pb-2">Your Email</label>
                                <input type="email" name="email" id="email-field" className="od-input" required="" />
                            </div>

                            <div className="col-md-12">
                                <label for="subject-field" className="pb-2">Subject</label>
                                <input type="text" name="subject" id="subject-field" className="od-input" required="" />
                            </div>

                            <div className="col-md-12">
                                <label for="message-field" className="pb-2">Message</label>
                                <textarea name="message" rows="10" id="message-field" className="od-input" required=""></textarea>
                            </div>

                            <div className="col-md-12 text-center">
                                <button style={{ backgroundColor: "skyblue", color: "white", border: "0", borderRadius: "50px", padding: "5px 20px", fontSize: "20px", fontWeight: "bold" }}>Send Message</button>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}