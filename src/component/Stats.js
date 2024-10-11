import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function Stats() {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="container  mt-5 mb-5 d-flex justify-content-center align-items-center " id="stats">
                <div className="m-5" >
                    <div className="d-flex  align-items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16" style={{ color: "skyblue", fontWeight: "bolder" }}>
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                        </svg>
                        <span style={{ fontSize: "50px", fontWeight: "bold" }}>
                            {counterOn && <CountUp start={0} end={232} duration={2} delay={0} />}

                        </span>
                    </div>
                    <p>
                        <strong>Happy Clients</strong><br />
                        <span>consequuntur quae</span>
                    </p>
                </div>

                <div className="m-5">
                    <div className="d-flex align-items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16" style={{ color: "skyblue", fontWeight: "bolder" }}>
                            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                        </svg>
                        <span style={{ fontSize: "50px", fontWeight: "bold" }}>
                            {counterOn && <CountUp start={0} end={521} duration={2} delay={0} />}

                        </span>
                    </div>
                    <p>
                        <strong>Projects</strong><br />
                        <span>adipisci atque cum quia aut</span>
                    </p>
                </div>

                <div className="m-5">
                    <div className="d-flex align-items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16" style={{ color: "skyblue", fontWeight: "bolder" }}>
                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                        </svg>
                        <span style={{ fontSize: "50px", fontWeight: "bold" }}>
                            {counterOn && <CountUp start={0} end={1453} duration={2} delay={0} />}

                        </span>
                    </div>
                    <p>
                        <strong>Hours Of Support</strong><br />
                        <span>aut commodi quaerat</span>
                    </p>
                </div>

                <div className="m-5">
                    <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16" style={{ color: "skyblue", fontWeight: "bolder" }}>
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                        </svg>
                        <span style={{ fontSize: "50px", fontWeight: "bold" }}>
                            {counterOn && <CountUp start={0} end={32} duration={2} delay={0} />}

                        </span>
                    </div>
                    <p>
                        <strong>Hard Workers</strong><br />
                        <span>rerum asperiores dolor</span>
                    </p>
                </div>
            </div>
        </ScrollTrigger>
    )
}