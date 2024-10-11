import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
export default function HeroImage() {
    const [typeEffect] = useTypewriter({
        words: ['Front-End', 'Graphic Design', 'Cv Design'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40

    })
    return (
        <header id='home'>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('/hero-bg.jpg')", height: "100vh", maxWidth: "100%" }}
            >

                <div className='d-flex justify-content-center align-items-center' style={{ marginTop: "20%" }}>
                    <div className='text-white hero'>
                        <h1 className='mb-3'>Odai Samara</h1>
                        <h4 className='mb-3' style={{ fontWeight: 'bold', fontSize: "20px" }}>i'm a <span >{typeEffect}</span></h4>
                    </div>
                </div>
            </div>

        </header>
    );
}