import React from 'react';


function Projects() {
    return(
        <section class="experience" id="work">
        <h2>My Recent Projects</h2>
        <div class="row mt-5">
            <div class="col">
              <div class="card">
              <img src="Refreshr.png"/>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://mighty-reef-66523.herokuapp.com/">Refreshr</a>
                  </h5>
                  <p class="card-text">
                    A MERN style e-commerce website designed for buying fictional energy drinks through a payment system.
                  </p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
              <img src="Readme.png"/>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://github.com/jcv12/ReadMe-Generator">ReadMe-Generator</a>
                  </h5>
                  <p class="card-text">
                    A Node.js application that utilizes user input to create a README.md file for the users repository.
                  </p>
                </div>
              </div>
            </div>
      
            <div class="col">
              <div class="card">
              <img src="Scare.png"/>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://github.com/jcv12/Scare-Prank">Scare-Prank</a>
                  </h5>
                  <p class="card-text">
                    Python script that allows for users to install a prank where it will display a scary woman after 30 minutes with a loud scream.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </section>
    );
}


export default Projects;