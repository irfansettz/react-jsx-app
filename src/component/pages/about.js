// *assets
import mathew from '../../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import alta from '../../assets/img/logo-ALTA-v2.png';
import fb from '../../assets/img/ic_fb@2x.png';
import twitter from '../../assets/img/ic-twitter@2x.png';
import instagram from '../../assets/img/ic-instagram@2x.png';
import linkedin from '../../assets/img/ic-linkedin@2x.png';

const About = () => {
    return (
      <div>
        <div className="container-fluid about-me">
          <h1 className="container pl-2 pt-5 pb-5">
            ABOUT ME.
          </h1>
        </div>  
        <div className="container">
          <div className="row pt-5 pb-5 ">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 pl-5">
              <div className="about-anne">
                <p>
                  Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. <br /><br />
                  Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis. <br /><br />
                  Here’s few technologies I’ve been working with recently :
                </p>
              </div>
              <div>
                <table className="tabel-anne">
                  <tbody><tr>
                      <td>HTML &amp; CSS</td>
                      <td>Serverless</td>
                      <td>Scrum</td>
                    </tr>
                    <tr>
                      <td>Programming</td>
                      <td>Restful API</td>
                      <td>Test-Driven Dev</td>
                    </tr>
                    <tr>
                      <td>Database</td>
                      <td>Javascript</td>
                      <td>Software Testing</td>
                    </tr>
                    <tr>
                      <td>Git &amp; Github</td>
                      <td>Sigle Page App</td>
                      <td>UX/UI Designer</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
              <div className="foto-id text-lg-right text-md-center text-sm-center">
                <img src={mathew} alt="mathew-hamilton" />
              </div>                
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
                <a href="index.html"><img className="logo-bawah" src={alta} alt="logo v2 alta"/></a>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
                <h6>Social Media:</h6>
                {/* <div class="col-3 text-center"> */}
                <a href="https://www.facebook.com/AlterraAcademy"><img className="logo-sosmed" alt="logo-facebook" src={fb} /></a>
                {/* </div> */}
                {/* <div class="col-3 text-center"> */}
                <a href="https://twitter.com/"><img className="logo-sosmed" src={twitter} alt="logo-twitter"/></a>
                {/* </div> */}
                {/* <div class="col-3 text-center"> */}
                <a href="https://www.instagram.com/alterra.academy/"><img className="logo-sosmed" src={instagram} alt="logo-instagram" /></a>
                {/* </div> */}
                {/* <div class="col-3 text-center"> */}
                <a href="https://id.linkedin.com/"><img className="logo-sosmed" src={linkedin} alt="logo-linkedin" /></a>
                {/* </div> */}
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
                <h6 className="text-lg-right text-md-center text-sm-center kopi">Copyleft © 2019 - Unjelas Team</h6>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default About;