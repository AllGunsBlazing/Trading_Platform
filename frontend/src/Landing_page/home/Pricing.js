import React from 'react';

function Pricing() {
    return ( 
    <div className="container">
        <div className="row">
           <div className="col-4">
            <h1 className='mb-3'>Unbeatable Price</h1>
            <p className='text-muted'>we pioneered the concept and no hidden charges.</p>
            <a href="" className="fw-bold text-primary" style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
           </div>
           <div className="col-2"></div>
           <div className="col-6">
            <div className="row text-center">
                <div className="col p-4 border">
                    <h1 className='mb-3'>0</h1>
                    <p>Free Equity Delivery & <br /> Direct mutual funds</p>
                </div>
                <div className="col p-4 border">
                <h1 className='mb-3'>20</h1>
                <p>Intraday and F&O</p>
                </div>
            </div>
           </div>
        </div>
    </div>
     );
}

export default Pricing;