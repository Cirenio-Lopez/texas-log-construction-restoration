import type { NextPage } from "next";
import Head from "next/head";
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
    <>
      <Head>
        <title>About - Texas Log Home Construction and Restoration</title>
      </Head>
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
              <FontAwesomeIcon
                icon={["fas", "angle-right"]}
                className="arrow"
              />
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
                      The Leading Log Home Construction and Restoration Company
                      in the Country
                    </h3>
                  </div>
                  <div className="block-description">
                    <h4 className="title">
                      Years of Experience with Log Homes
                    </h4>
                    <p className="description">
                      Texas Log Home Construction and Restoration LLC has
                      constantly been working to create results our clients
                      love. Having experience in this industry over years, we
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
                Throughout the past several years, we have been thankful to have
                been able to work with a variety of clients throughout the
                southwest. Whether it be designing a new home, on the field
                working alongside our construction crew, or restoring existing
                homes, our enjoyment comes from helping our clients.
              </span>
            </div>
            <div className="row">
              <div className="col-quart">
                <div className="content">
                  <div className="block-title">
                    <h4>Home Restoration</h4>
                  </div>
                  <div className="block-image">
                    <img src="/gallery/projectOne/cover/cover.jpg" alt="test" />
                  </div>
                  <div className="block-subtitle">
                    <h4>Texas</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      We work hard to restore homes to their original quality,
                      stripping paint from the interior and exterior logs, and
                      recoating each log and wooden plank to give it new life.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-quart">
                <div className="content">
                  <div className="block-title">
                    <h4>Log Restoration</h4>
                  </div>
                  <div className="block-image">
                    <img src="/gallery/projectTwo/cover/cover.jpg" alt="test" />
                  </div>
                  <div className="block-subtitle">
                    <h4>Texas</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      If an exterior log restoration is all that is needed, that
                      is no problem. We have worked with several clients on
                      restoring color and shine to their log homes, giving them
                      new life.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-quart">
                <div className="content">
                  <div className="block-title">
                    <h4>Home Construction</h4>
                  </div>
                  <div className="block-image">
                    <img
                      src="/gallery/projectFour/cover/cover.jpg"
                      alt="test"
                    />
                  </div>
                  <div className="block-subtitle">
                    <h4>Colorado</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      Even if you&apos;re out of state, no problem. Our team can
                      work on providing services outside of the state depending
                      on location and service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-quart">
                <div className="content">
                  <div className="block-title">
                    <h4>Home Modeling</h4>
                  </div>
                  <div className="block-image">
                    <img
                      src="/gallery/projectFive/cover/cover.jpg"
                      alt="test"
                    />
                  </div>
                  <div className="block-subtitle">
                    <h4>Remote</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      If you are to the market and interested in building a new
                      home, contact us and we will work on a design that you
                      will love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
