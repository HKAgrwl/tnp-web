import React from 'react';

export default function Sidebar2() {
    return <div>
        <input type="checkbox" name="" id="side-menu-switch"/>
            <div class="side-menu">
                <nav>
                    <a href="#"><i class="fas fa-gavel"></i>My Profile</a><br />
                    <a href="#"><i class="fas fa-gavel"></i>My Posts</a><br />
                    <a href="#"><i class="fas fa-gavel"></i>Create Interview</a>
                </nav>
                <label for="side-menu-switch">
                    <i class="fas fa-angle-left"></i>
                </label>
            </div>
    </div>;
}
