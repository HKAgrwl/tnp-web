import React from 'react';
import logo from './Components/LogoJammu.jpeg'
import Glogin from './Components/Google_Login.png'



export default function LoginPage() {
    return <div>
        {/* Form */}
        <main class="form-signin">
            <form>
                <img class="mb-4" src={logo} alt="" width="100%" height="30%"/>
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                    </div><br />
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                    </div><br />

                    <div class="checkbox mb-3"> 
                        <span>
                        <a href="/"><img src={Glogin}/></a></span>
                    </div><br />
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
    </div>;
}
