import React from 'react';
import Box from '@mui/material/Box';


export default function MyPosts() {
  return <div>
    <Box id='MyPosts' sx={{ marginTop: '65px', height: '90vh', width: '100vw', padding: '12px 50px', backgroundColor: 'white', borderRadius: '5px' }}>
      <h3>Your Posts</h3>
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
