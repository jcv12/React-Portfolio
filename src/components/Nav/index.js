import React from 'react';

function Nav() {


    return(
        <header>
        
            <h1 class="line typing-animation">John Vayianos</h1>
            <nav>
                <ul>
                <li>
                    <a href="#about" class="sliding-middle-out">About</a>
                </li>
                <li>
                    <a href="#experience" class="sliding-middle-out">Projects</a>
                </li>
                <li>
                    <a href="#contact" class="sliding-middle-out">Contact</a>
                </li>
                <li>
                    <a href="https://docs.google.com/document/d/1g-nBKzXDXOVsQBTBirO5DfCwKb5gMlMPxG" class="sliding-middle-out">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}



export default Nav;