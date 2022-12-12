import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from '../navbar/Navbar';
import About from '../aboutus/About';
import { FaLinkedinIn } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import hamza from "./abt-img/hamza.jpg";
import ibraheem from "./abt-img/ibraheem.jpg";
import mhmd from "./abt-img/mhmd.jpg";
import suhaib from "./abt-img/SuhiabAlnji.jpg";
import Wlla from "./abt-img/walla.jpg";
import "./aboutPage.css";

export default class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div >
          <section className='top-background-about'>
            <p>About Us</p>
          </section>
        </div>
        <About />
        <div className="about" >
          <section class="bg-light mt-5" id="ABOUT">
            <div id="about-1">
              <div className="content-box-lg">
                <div className="container">
                  <div class="col-sm-12 col-md-12 mb-4">
                    <h3 class="text-center mt-4 text-secondary" style={{ 'padding': '50px' }}>Our Team</h3>
                  </div>
                  <div className="row" style={{ 'display': 'grid' },
                    { 'justify-content': 'center' }}>
                    <div className="col-md-3" style={{ 'margin-right': '100px' }}>
                      <div className="text-center" >
                        <img src={suhaib} class="w-100 rounded-circle" alt="Suhaib" />
                        <h4 className="pt-3" style={{ 'color': ' #00095E' }}>Suhaib Alnaji</h4>
                        <p style={{ 'color': ' #00095E' }}>Web Developer</p>
                        <div className="icons-display">
                          <a
                            className="about-icon"
                            href="https://github.com/SuhaibAln"
                          >
                            <GoMarkGithub />
                          </a>
                          <a
                            className="about-icon"
                            href="https://www.linkedin.com/in/suhaib-alnaji-0835181b9"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3" style={{ 'margin-right': '100px' }}>
                      <div className="text-center">
                        <img src={mhmd} className="w-100 rounded-circle" alt="mhmd" />
                        <h4 className="pt-3" style={{ 'color': ' #00095E' }}>Moh'd Al-Haimouni</h4 >
                        <p style={{ 'color': ' #00095E' }}>Web Developer</p>
                        <div className="icons-display">
                          <a
                            className="about-icon"
                            href="https://github.com/Alhaimouni"
                          >
                            <GoMarkGithub />
                          </a>
                          <a
                            className="about-icon"
                            href="https://www.linkedin.com/in/mohammad-al-haimouni-64ab72242/"
                          >
                            <FaLinkedinIn />
                          </a></div>
                      </div>
                    </div>

                    <div className="col-md-3" style={{ 'margin-right': '100px' }}>
                      <div className="text-center">
                        <img src={ibraheem} className="w-100 rounded-circle" alt="ibraheem" />
                        <h4 className="pt-3" style={{ 'color': ' #00095E' }}>Ibraheem Adarbeh</h4 >
                        <p style={{ 'color': ' #00095E' }}>Web Developer</p>
                        <div className="icons-display">
                          <a
                            className="about-icon"
                            href="https://github.com/ADARBEH"
                          >
                            <GoMarkGithub />
                          </a>
                          <a
                            className="about-icon"
                            href="https://www.linkedin.com/in/ibraheem-adarbeh/"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3" style={{ 'margin': '100px' }}>
                      <div className="text-center">
                        <img src={Wlla} className="w-100 rounded-circle" alt="wlla" />
                        <h4 className="pt-3" style={{ 'color': ' #00095E' }}>Wlla Talafha</h4 >
                        <p style={{ 'color': ' #00095E' }}>Web Developer</p>
                        <div className="icons-display">
                          <a
                            className="about-icon"
                            href="https://github.com/WllaTalafha"
                          >
                            <GoMarkGithub />
                          </a>
                          <a
                            className="about-icon"
                            href="https://www.linkedin.com/in/wlla-talafha-54b528246"
                          >
                            <FaLinkedinIn />
                          </a></div>
                      </div>
                    </div>
                    <div className="col-md-3" style={{ 'margin': '100px' }} >
                      <div className="text-center">
                        <img src={hamza} className="w-100 rounded-circle" alt="hamza" />
                        <h4 className="pt-3" style={{ 'color': ' #00095E' }}>Hamzah Aldaamas</h4 >
                        <p style={{ 'color': ' #00095E' }}>Web Developer</p>
                        <div className="icons-display">
                          <a
                            className="about-icon"
                            href="https://github.com/hamzahhisham306"
                          >
                            <GoMarkGithub />
                          </a>
                          <a
                            className="about-icon"
                            href=""
                          >
                            <FaLinkedinIn />
                          </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div >
      </>
    );
  }
}