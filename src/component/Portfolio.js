import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Portfolio() {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <div className='container portfolio mt-5 mb-5' id='portfolio'>
            <div>
                <h2>Portfolio</h2>
                <p className='port-p'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className='d-flex mt-5 justify-content-center align-items-center'>
                <MDBTabs className='mb-3 port-width'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            All
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            App
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            PRODUCT
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                            BRANDING
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'}>
                            BOOKS
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
            </div>
            <MDBTabsContent className='mt-5 port-padding'>
                <MDBTabsPane open={basicActive === 'tab1'} >
                    <img src='/portfolio/app-1.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/app-2.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/app-3.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/books-1.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/books-2.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/books-3.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/branding-1.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/branding-2.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/branding-3.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/product-1.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/product-2.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/product-3.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                </MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab2'}>
                    <img src='/portfolio/app-1.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/app-2.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/app-3.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                </MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab3'}>
                    <img src='/portfolio/product-1.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/product-2.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/product-3.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                </MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab4'}>
                    <img src='/portfolio/branding-1.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/branding-2.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/branding-3.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                </MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab5'}>
                    <img src='/portfolio/books-1.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/books-2.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                    <img src='/portfolio/books-3.jpg' alt='4*4' className='portSize' style={{ width: "30%", height: "auto", margin: "10px" }} />
                </MDBTabsPane>
            </MDBTabsContent>

        </div>
    );
}