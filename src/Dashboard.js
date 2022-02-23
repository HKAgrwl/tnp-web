import React from 'react';
import campus1 from './Components/Campus1.jpg';
import campus2 from './Components/Campus2.png';
import convo from './Components/Convo.jpg'

export default function Dashboard() {
    return <div>
        <main>
            
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={campus1} style={{height:'500px', width:'100%'}}/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>WELCOME TO</h1>
                                <p>IIT Jammu's very own placement guide.</p>
                                <p><a className="btn btn-lg btn-success" href="#">Sign In</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img src={campus2} style={{height:'500px', width:'100%'}}/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>THE FORUM</h1>
                                <p>Get the help you need and provide the help you can.</p>
                                <p><a className="btn btn-lg btn-success" href="#">Go to Forum</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={convo} style={{height:'500px', width:'100%'}}/>
                        <div className="container">
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div><br></br><br />
            {/* Second Conatiner(round avatars) */}
            <div className="container marketing h-50" style={{alignItems:'center'}} >

                <div className="row">
                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2>Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                    </div>
                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2>Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                    </div>
                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2>Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                    </div>
                </div>
                {/* The boxes */}
                <hr className="featurette-divider"/>

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Message from <span className="text-muted">The Director </span></h2>
                            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                        </div>
                        <div className="col-md-5">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                        </div>
                    </div>

                    <hr className="featurette-divider"/>

                        <div className="row featurette">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading">Message from <span className="text-muted">TnP Cell </span></h2>
                                <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                            </div>
                        </div>

                        <hr className="featurette-divider"/>

                            <div className="row featurette">
                                <div className="col-md-7">
                                    <h2 className="featurette-heading">Message from <span className="text-muted">Dean Academics</span></h2>
                                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                                </div>
                                <div className="col-md-5">
                                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                                </div>
                            </div>

                            <hr className="featurette-divider"/>


                            </div>

                        </main>
                      </div>;
}
