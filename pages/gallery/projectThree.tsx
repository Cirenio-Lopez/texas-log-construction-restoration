import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faPhone } from "@fortawesome/free-solid-svg-icons";

const ProjectOne = () => {
  library.add(faAngleRight, faPhone);
  return (
    <div className="gallery section-wrapper">
      <section className="page-header">
        <div className="header-background service-background">
          <img
            alt="header-background"
            src="/gallery/projectThree/projectThree (8).jpg"
          />
        </div>
        <div className="text-container">
          <h2 className="title">Gallery</h2>
          <div className="subtitle">
            <p>
              <Link href="/">Home</Link>
            </p>
            <FontAwesomeIcon icon={["fas", "angle-right"]} className="arrow" />
            <p>
              <Link href="/gallery">Gallery</Link>
            </p>
            <FontAwesomeIcon icon={["fas", "angle-right"]} className="arrow" />
            <p>Project Three</p>
          </div>
        </div>
      </section>
      <section className="page-columns">
        <div className="container">
          <div className="row">
            <div className="col-half">
              <div className="content">
                <div className="block-title">
                  <p className="subtitle">Who We Are</p>
                  <h3 className="title">
                    The Leading Log Home Construction and Restoration Company in
                    the Country
                  </h3>
                </div>
                <div className="block-description">
                  <h4 className="title">
                    Experience with Log Homes since 200X
                  </h4>
                  <p className="description">
                    Texas Log Home Construction and Restoration LLC has
                    constantly been working to create results our clients love.
                    Having experience in this industry for over XX years, we
                    believe that we can provide the best service for a great
                    price. Whether you are located in Texas or otherwise, give
                    us a call and we will send you a quote for your next
                    project.
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
            </div>
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
                      src="/gallery/projectThree/projectThree (1).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (2).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (3).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (4).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (5).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (6).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (7).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (8).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (9).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (10).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (11).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (12).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (13).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (14).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (15).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (16).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (17).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (18).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (19).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (20).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (21).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (22).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (23).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (24).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (25).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (26).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (27).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (28).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (29).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (30).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (31).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (32).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (33).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (34).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (35).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (36).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (37).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (38).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (39).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (40).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (41).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (42).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (43).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (44).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (45).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (46).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (47).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (48).jpg"
                      alt="Project Three image"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      src="/gallery/projectThree/projectThree (49).jpg"
                      alt="Project Three image"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectOne;
