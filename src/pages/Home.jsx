import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <>
            <div className="landing-page">
                <div>
                        <h2 id='head'>Welcome to the World Of Crypto!</h2>
                        <p id='head'>Simplifying Crypto, Amplifying Profits.</p>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://forkast.news/wp-content/uploads/2022/02/crypto-pic-1260x840.jpg" className="d-block w-100" alt="..." id='carousel'></img>
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.shutterstock.com/image-illustration/top-7-cryptocurrency-tokens-by-260nw-2152214777.jpg" className="d-block w-100" alt="..." id='carousel'></img>
                        </div>
                        <div className="carousel-item">
                        <img src="https://bernardmarr.com/img/What%20is%20the%20Difference%20Between%20Blockchain%20And%20Bitcoin.png" className="d-block w-100" alt="..." id='carousel'></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>


                <div className="gradient-background" id='features'>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon">
                                        <i className="fas fa-chart-line" ></i>
                                    </div>
                                    <h5 className="card-title" >Career Path</h5>
                                    <p className="card-text">Chart Your Career Path with a Research-Driven Analytical Approach</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" >
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon" >
                                        <i className="fas fa-briefcase" ></i>
                                    </div>
                                    <h5 className="card-title" >Portfolio</h5>
                                    <p className="card-text">See your Profitfolio grow from Ground Zero with simple porjects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" >
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon" >
                                        <i className="fas fa-headset" ></i>
                                    </div>
                                    <h5 className="card-title" >Guidance</h5>
                                    <p className="card-text">Providing Guidance and Support to Propel You Toward Your Crypto Goals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </>
        
    );
};

export default Home;