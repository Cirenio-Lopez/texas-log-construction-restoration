import Link from "next/link";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faPhone } from "@fortawesome/free-solid-svg-icons";

const ProjectFive = () => {
  library.add(faAngleRight, faPhone);
  return (
    <>
      <Head>
        <title>
          Project Five - Texas Log Home Construction and Restoration
        </title>
      </Head>
      <div className="gallery section-wrapper">
        <section className="page-header">
          <div className="header-background service-background">
            <img
              alt="header-background"
              src="/gallery/projectFive/projectFive (11).jpg"
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
              <p>Project Five</p>
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
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (1).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (2).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (3).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (4).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (5).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (6).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (7).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (8).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (9).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (10).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (11).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (12).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (13).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (14).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (15).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (16).jpg"
                        alt="Project Five image"
                      />
                    </div>
                    <div className="img-wrapper">
                      {" "}
                      <img
                        src="/gallery/projectFive/projectFive (17).jpg"
                        alt="Project Five image"
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

export default ProjectFive;
