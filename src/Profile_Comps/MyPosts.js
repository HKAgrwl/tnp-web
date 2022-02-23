import React from 'react';
import Box from '@mui/material/Box';
// import Divider from '@mui/material';

export default function MyPosts() {
  return <div>
    <Box id='MyPosts' sx={{ marginTop: '0px', height: '90vh', width: '100vw', padding: '12px 50px', backgroundColor: 'white', borderRadius: '5px' }}>
      <h3>Your Posts</h3>
      {/* <Divider variant="middle" /> */}
      {/* <div classNameName="row row-cols-1 row-cols-md-3 g-4" style={{padding:'20px 20px',margin:'80px 20px'}}>

        <div classNameName="card" style={{ width: '18rem',marginRight:'15px',boxShadow:'3px 3px 3px black' }}>
          <img src="..." classNameName="card-img-top" alt="..." />
          <div classNameName="card-body">
            <h5 classNameName="card-title">Card title</h5>
            <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <span><a href="/" classNameName="btn btn-primary">View</a></span><span style={{position:'relative',right:'-98px'}}>x likes</span>
          </div>
      </div>
        <div classNameName="card" style={{ width: '18rem',marginRight:'15px',boxShadow:'3px 3px 3px black' }}>
          <img src="..." classNameName="card-img-top" alt="..." />
          <div classNameName="card-body">
            <h5 classNameName="card-title">Card title</h5>
            <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <span><a href="/" classNameName="btn btn-primary">View</a></span><span style={{position:'relative',right:'-98px'}}>x likes</span>
          </div>
      </div>
        <div classNameName="card" style={{ width: '18rem',marginRight:'15px',boxShadow:'3px 3px 3px black' }}>
          <img src="..." classNameName="card-img-top" alt="..." />
          <div classNameName="card-body">
            <h5 classNameName="card-title">Card title</h5>
            <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <span><a href="/" classNameName="btn btn-primary">View</a></span><span style={{position:'relative',right:'-98px'}}>x likes</span>
          </div>
      </div>
        <div classNameName="card" style={{ width: '18rem',marginRight:'15px',boxShadow:'3px 3px 3px black' }}>
          <img src="..." classNameName="card-img-top" alt="..." />
          <div classNameName="card-body">
            <h5 classNameName="card-title">Card title</h5>
            <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <span><a href="/" classNameName="btn btn-primary">View</a></span><span style={{position:'relative',right:'-98px'}}>x likes</span>
          </div>
      </div>
      </div> */}
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-medium" style={{boxShadow:'-3px 3px 3px black'}}>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 likes</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-medium" style={{boxShadow:'-3px 3px 3px black'}}>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 likes</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-medium" style={{boxShadow:'-3px 3px 3px black'}}>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 likes</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-medium" style={{boxShadow:'-3px 3px 3px black'}}>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 likes</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  </div>;
}
