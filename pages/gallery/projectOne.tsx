import Link from "next/link";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faPhone } from "@fortawesome/free-solid-svg-icons";

const ProjectOne = () => {
  library.add(faAngleRight, faPhone);
  return (
    <>
      {" "}
      <div className="gallery section-wrapper">
        <section className="page-header">
          <div className="header-background service-background">
            <img
              alt="header-background"
              src="/gallery/projectOne/projectOne (35).jpg"
            />
          </div>
          <div className="text-container">
            <h2 className="title">Gallery</h2>
            <div className="subtitle">
              <p>
                <Link href="/">Home</Link>
              </p>
              <FontAwesomeIcon
                icon={["fas", "angle-right"]}
                className="arrow"
              />
              <p>
                <Link href="/gallery">Gallery</Link>
              </p>
              <FontAwesomeIcon
                icon={["fas", "angle-right"]}
                className="arrow"
              />
              <p>Project One</p>
            </div>
          </div>
        </section>
        <section className="page-columns">
          <div className="container">
            <div className="row">
              {/* <div className="col-half">
                <div className="content">
                  <div className="block-title">
                    <p className="subtitle">Who We Are</p>
                    <h3 className="title">
                      The Leading Log Home Construction and Restoration Company
                      in the Country
                    </h3>
                  </div>
                  <div className="block-description">
                    <h4 className="title">
                      Experience with Log Homes since 200X
                    </h4>
                    <p className="description">
                      Texas Log Home Construction and Restoration LLC has
                      constantly been working to create results our clients
                      love. Having experience in this industry for over XX
                      years, we believe that we can provide the best service for
                      a great price. Whether you are located in Texas or
                      otherwise, give us a call and we will send you a quote for
                      your next project.
                    </p>
                  </div>
                  <div className="block-boxes">
                    <div className="box-half">
                      <div className="box-wrapper">
                        <FontAwesomeIcon
                          icon={["fas", "phone"]}
                          className="icon"
                        />
                        <h3 className="title">Call Us For A Quote</h3>
                        <div className="button">Contact Us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-half">
                <div className="content">
                  <Carousel
                    swipeable
                    autoPlay
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop
                  >
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (1).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (2).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (3).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (4).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (5).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (6).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (7).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (8).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (9).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (10).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (11).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (12).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (13).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (14).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (15).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (16).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (17).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (18).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (19).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (20).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (21).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (22).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (23).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (24).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (25).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (26).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (27).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (28).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (29).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (30).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (31).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (32).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (33).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (34).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (35).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (36).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (37).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (38).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (39).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (40).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (41).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (42).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (43).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (44).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (45).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (46).jpg"
                        alt="Project One image"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/gallery/projectOne/projectOne (48).jpg"
                        alt="Project One image"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectOne;
