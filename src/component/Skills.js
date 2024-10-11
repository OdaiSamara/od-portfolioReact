import React from "react";
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";




export default function Skills() {
    const [progressOn, setprogressOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setprogressOn(true)} onExit={() => setprogressOn(false)}>
            <div className='container skills mt-5 mb-5' id="skills">
                <div>
                    <h2>Skills</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="row mt-5" >
                    <div className="col-sm-12 col-lg-6   ">
                        <label className="mb-2">html</label>
                        <MDBProgress height='20'>
                            {progressOn ? <MDBProgressBar className=" prog-animation" width="100" valuemin={0} valuemax={100} > </MDBProgressBar> : <MDBProgressBar className=" prog-animation" width="0" valuemin={0} valuemax={100} >    </MDBProgressBar>}

                        </MDBProgress>
                        <label className="mb-2 mt-2">css</label>
                        <MDBProgress height='20'>
                            {progressOn ? <MDBProgressBar className=" prog-animation" width="90" valuemin={0} valuemax={100} > </MDBProgressBar> : <MDBProgressBar className=" prog-animation" width="0" valuemin={0} valuemax={100} >    </MDBProgressBar>}
                        </MDBProgress>
                        <label className="mb-2 mt-2">javaScript</label>
                        <MDBProgress height='20'>
                            {progressOn ? <MDBProgressBar className=" prog-animation" width="75" valuemin={0} valuemax={100} > </MDBProgressBar> : <MDBProgressBar className=" prog-animation" width="0" valuemin={0} valuemax={100} >    </MDBProgressBar>}
                        </MDBProgress>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <label className="mb-2">React Js</label>
                        <MDBProgress height='20'>
                            {progressOn ? <MDBProgressBar className=" prog-animation" width="80" valuemin={0} valuemax={100} > </MDBProgressBar> : <MDBProgressBar className=" prog-animation" width="0" valuemin={0} valuemax={100} >    </MDBProgressBar>}
                        </MDBProgress>
                        <label className="mb-2 mt-2">BootStrap</label>
                        <MDBProgress height='20'>
                            {progressOn ? <MDBProgressBar className=" prog-animation" width="90" valuemin={0} valuemax={100} > </MDBProgressBar> : <MDBProgressBar className=" prog-animation" width="0" valuemin={0} valuemax={100} >    </MDBProgressBar>}
                        </MDBProgress>
                        <label className="mb-2 mt-2">Photoshop</label>
                        <MDBProgress height='20'>
                            {progressOn ? <MDBProgressBar className=" prog-animation" width="55" valuemin={0} valuemax={100} > </MDBProgressBar> : <MDBProgressBar className=" prog-animation" width="0" valuemin={0} valuemax={100} >    </MDBProgressBar>}
                        </MDBProgress>
                    </div>
                </div>
            </div>

        </ScrollTrigger>
    )
}