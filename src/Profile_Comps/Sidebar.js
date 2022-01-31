import React from 'react';

export default function Sidebar() {
  return <div>
    
    <input type="checkbox" name="" id="side-menu-switch"/>
      <div class="side-menu">
        {/* <form action="">
          <input type="text" placeholder="Search For"/>
            <button>
              <i class="fas fa-search"></i>
            </button>
        </form> */}
        <nav>
          <a><i class="fas fa-gavel"></i>My Profile</a><br />
          <a ><i class="fas fa-gavel"></i>My Posts</a><br/>
          <a><i class="fas fa-gavel"></i>Create Interview</a><br/>
        </nav>
        {/* <label for="side-menu-switch">
          <i class="fas fa-angle-left"></i>
        </label> */}
      </div>
  </div>;
}

