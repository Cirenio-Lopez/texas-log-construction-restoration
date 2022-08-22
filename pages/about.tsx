import type { NextPage } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faHouse,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";

const About: NextPage = () => {
  library.add(faAngleRight, faHouse, faHammer);

  return (
    <div className="about section-wrapper">
      <section className="page-header">
        <div className="header-background">
          <img alt="header-background" src="/img/index-cover/cover-1.jpeg" />
        </div>
        <div className="text-container">
          <h2 className="title">About Us</h2>
          <div className="subtitle">
            <p>
              <Link href="/">Home</Link>
            </p>
            <FontAwesomeIcon icon={["fas", "angle-right"]} className="arrow" />
            <p>About</p>
          </div>
        </div>
      </section>
      <section className="page-columns">
        <div className="container">
          <div className="row">
            <div className="col-half">
              <div className="content images">
                <img
                  className="img-full"
                  src="/img/index-cover/index-4.jpeg"
                  alt="temp"
                />
                <div className="sub-image">
                  <img
                    className="sub-img"
                    src="/img/index-cover/about-1.png"
                    alt="temp"
                  />
                  <div className="img-text">
                    <h3>You won&apos;t just find us here in Texas</h3>
                    <p>
                      Learn more about our work here and outside of the Lone
                      Star State
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                        icon={["fas", "house"]}
                        className="icon"
                      />
                      <h3 className="title">Log Homes</h3>
                      <Link href="/services">
                        <div className="button">Learn More</div>
                      </Link>
                    </div>
                  </div>
                  <div className="box-half">
                    <div className="box-wrapper">
                      <FontAwesomeIcon
                        icon={["fas", "hammer"]}
                        className="icon"
                      />
                      <h3 className="title">Log Restoration</h3>
                      <Link href="/services">
                        <div className="button">Learn More</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-columns">
        <div className="container">
          <div className="title-container">
            <span className="subtitle">Our History</span>
            <h3 className="title">The Story Of Our Success</h3>
            <span className="description">
              Wastey is constantly working to create an environment that is both
              enjoyable to work in and conducive to exceptional results. We are
              dedicated to enhancing the capacities of our employees in order to
              provide them with the tools they need to succeed and to develop
              leaders at all levels.
            </span>
          </div>
          <div className="row">
            <div className="col-quart">
              <div className="content">
                <div className="block-title">
                  <h4>2015</h4>
                </div>
                <div className="block-image">
                  <img src="/img/index-cover/cover-1.jpeg" alt="test" />
                </div>
                <div className="block-subtitle">
                  <h4>Fort Worth</h4>
                </div>
                <div className="block-description">
                  <p>
                    We work hard to keep our employees, customers, and the
                    environment safe, and we always respond when we detect a
                    threat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-quart">
              <div className="content">
                <div className="block-title">
                  <h4>2017</h4>
                </div>
                <div className="block-image">
                  <img src="/img/index-cover/cover-2.jpeg" alt="test" />
                </div>
                <div className="block-subtitle">
                  <h4>Denton</h4>
                </div>
                <div className="block-description">
                  <p>
                    We work hard to keep our employees, customers, and the
                    environment safe, and we always respond when we detect a
                    threat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-quart">
              <div className="content">
                <div className="block-title">
                  <h4>2019</h4>
                </div>
                <div className="block-image">
                  <img src="/img/index-cover/cover-3.jpeg" alt="test" />
                </div>
                <div className="block-subtitle">
                  <h4>Lake Tahoe</h4>
                </div>
                <div className="block-description">
                  <p>
                    We work hard to keep our employees, customers, and the
                    environment safe, and we always respond when we detect a
                    threat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-quart">
              <div className="content">
                <div className="block-title">
                  <h4>2021</h4>
                </div>
                <div className="block-image">
                  <img src="/img/index-cover/cover-4.jpeg" alt="test" />
                </div>
                <div className="block-subtitle">
                  <h4>Little Elm</h4>
                </div>
                <div className="block-description">
                  <p>
                    We work hard to keep our employees, customers, and the
                    environment safe, and we always respond when we detect a
                    threat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
