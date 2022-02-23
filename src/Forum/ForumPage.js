import React from 'react';

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme-d1";
    } else { 
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }

// Used to toggle the menu on smaller screens when clicking on the menu button
  function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
export default function ForumPage() {
    return <div>
        <div className="w3-top">
            <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onClick={openNav} ><i className="fa fa-bars"></i></a>
                <a href="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right"></i>Logo</a>
                <a href="/" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i className="fa fa-globe"></i></a>
                <a href="/" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i className="fa fa-user"></i></a>
                <a href="/" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i className="fa fa-envelope"></i></a>
                <div className="w3-dropdown-hover w3-hide-small">
                    <button className="w3-button w3-padding-large" title="Notifications"><i className="fa fa-bell"></i><span className="w3-badge w3-right w3-small w3-green">3</span></button>
                    <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
                        <a href="/" className="w3-bar-item w3-button">One new friend request</a>
                        <a href="/" className="w3-bar-item w3-button">John Doe posted on your wall</a>
                        <a href="/" className="w3-bar-item w3-button">Jane likes your post</a>
                    </div>
                </div>
                <a href="/" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
                    <img src="/w3images/avatar2.png" className="w3-circle" style={{ height: '23px', width: '23px' }} alt="Avatar" />
                </a>
            </div>
        </div>

        <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
            <a href="/" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
            <a href="/" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
            <a href="/" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
            <a href="/" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
        </div>

        {/* Page Container Starts */}
        <div class="w3-container w3-content" style={{maxWidth:'1400px',marginTop:'80px'}}>

            {/* Left Column Starts*/}
            <div class="w3-col m3">
                {/* <!-- Profile --> */}
                <div className="w3-card w3-round w3-white">
                    <div className="w3-container">
                        <h4 className="w3-center">My Profile</h4>
                        <p className="w3-center"><img src="/w3images/avatar3.png" className="w3-circle" style={{ height: '106px', width: '106px' }} alt="Avatar" /></p>
                        <hr />
                        <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Designer, UI</p>
                        <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> London, UK</p>
                        <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
                    </div>
                </div>
                <br></br>

                {/* <!-- Accordion --> */}
                <div class="w3-card w3-round">
                    <div class="w3-white">
                        <button class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
                        <div id="Demo1" class="w3-hide w3-container">
                            <p>Some text..</p>
                        </div>
                        <button class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>
                        <div id="Demo2" class="w3-hide w3-container">
                            <p>Some other text..</p>
                        </div>
                        <button class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>
                        <div id="Demo3" class="w3-hide w3-container">
                            <div class="w3-row-padding">
                                <br></br>
                                <div class="w3-half">
                                    <img src="/w3images/lights.jpg" style={{ width: '100%' }} class="w3-margin-bottom" />
                                </div>
                                <div class="w3-half">
                                    <img src="/w3images/nature.jpg" style={{ width: '100%' }} class="w3-margin-bottom" />
                                </div>
                                <div class="w3-half">
                                    <img src="/w3images/mountains.jpg" style={{ width: '100%' }} class="w3-margin-bottom" />
                                </div>
                                <div class="w3-half">
                                    <img src="/w3images/forest.jpg" style={{ width: '100%' }} class="w3-margin-bottom" />
                                </div>
                                <div class="w3-half">
                                    <img src="/w3images/nature.jpg" style={{ width: '100%' }} class="w3-margin-bottom" />
                                </div>
                                <div class="w3-half">
                                    <img src="/w3images/snow.jpg" style={{ width: '100%' }} class="w3-margin-bottom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>

                {/* <!-- Interests -->  */}
                <div class="w3-card w3-round w3-white w3-hide-small">
                    <div class="w3-container">
                        <p>Interests</p>
                        <p>
                            <span class="w3-tag w3-small w3-theme-d5">News</span>
                            <span class="w3-tag w3-small w3-theme-d4">W3Schools</span>
                            <span class="w3-tag w3-small w3-theme-d3">Labels</span>
                            <span class="w3-tag w3-small w3-theme-d2">Games</span>
                            <span class="w3-tag w3-small w3-theme-d1">Friends</span>
                            <span class="w3-tag w3-small w3-theme">Games</span>
                            <span class="w3-tag w3-small w3-theme-l1">Friends</span>
                            <span class="w3-tag w3-small w3-theme-l2">Food</span>
                            <span class="w3-tag w3-small w3-theme-l3">Design</span>
                            <span class="w3-tag w3-small w3-theme-l4">Art</span>
                            <span class="w3-tag w3-small w3-theme-l5">Photos</span>
                        </p>
                    </div>
                </div>
                <br></br>

                {/* <!-- Alert Box --> */}
                <div class="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
                    <span class="w3-button w3-theme-l3 w3-display-topright">
                        <i class="fa fa-remove"></i>
                    </span>
                    <p><strong>Hey!</strong></p>
                    <p>People are looking at your profile. Find out who.</p>
                </div>
                {/* End of Left Column */}
            </div>

            {/*Middle Column Starts */}
            <div class="w3-col m7">
                {/* Write Post */}
                <div class="w3-row-padding">
                    <div class="w3-col m12">
                        <div class="w3-card w3-round w3-white">
                            <div class="w3-container w3-padding">
                                <h6 class="w3-opacity">Write your post here</h6>
                                <p contenteditable="true" class="w3-border w3-padding"></p>
                                <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Post 1 */}
                <div class="w3-container w3-card w3-white w3-round w3-margin"><br />
                    <img src="/w3images/avatar2.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
                    <span class="w3-right w3-opacity">1 min</span>
                    <h4>John Doe</h4><br />
                    <hr class="w3-clear" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div class="w3-row-padding" style={{ margin: '0 -16px' }}>
                        <div class="w3-half">
                            <img src="/w3images/lights.jpg" style={{ width: '100%' }} alt="Northern Lights" class="w3-margin-bottom" />
                        </div>
                        <div class="w3-half">
                            <img src="/w3images/nature.jpg" style={{ width: '100%' }} alt="Nature" class="w3-margin-bottom" />
                        </div>
                    </div>
                    <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button>
                    <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button>
                </div>
                {/* Post 2 */}
                <div class="w3-container w3-card w3-white w3-round w3-margin"><br />
                    <img src="/w3images/avatar5.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
                    <span class="w3-right w3-opacity">16 min</span>
                    <h4>Jane Doe</h4><br />
                    <hr class="w3-clear" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button>
                    <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button>
                </div>
                {/* Post 3 */}
                <div class="w3-container w3-card w3-white w3-round w3-margin"><br />
                    <img src="/w3images/avatar6.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
                    <span class="w3-right w3-opacity">32 min</span>
                    <h4>Angie Jane</h4><br />
                    <hr class="w3-clear" />
                    <p>Have you seen this?</p>
                    <img src="/w3images/nature.jpg" style={{ width: '100%' }} class="w3-margin-bottom" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button>
                    <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button>
                </div>
                {/* Middle Column Ends */}
            </div>

            {/* Right Column Starts */}
            {/* Upcoming Events */}
            <div class="w3-col m2">
                <div class="w3-card w3-round w3-white w3-center">
                    <div class="w3-container">
                        <p>Upcoming Events:</p>
                        <img src="/w3images/forest.jpg" alt="Forest" style={{ width: '100%' }} />
                        <p><strong>Holiday</strong></p>
                        <p>Friday 15:00</p>
                        <p><button class="w3-button w3-block w3-theme-l4">Info</button></p>
                    </div>
                </div>
                <br />
            {/* Right Column Ends */}
            </div>


        {/* Page Container Ends */}
        </div>
    </div>;
}   
