import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faHammer,
  faTree,
  faPenRuler,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Index: NextPage = () => {
  library.add(faHouse, faHammer, faTree, faPenRuler, faAngleRight);
  return (
    <>
      <Head>
        <title>Home - Texas Log Home Construction and Restoration</title>
      </Head>
      <div className="index">
        <section className="cover">
          <div className="img-container">
            <Carousel
              showThumbs={false}
              showStatus={false}
              swipeable
              autoPlay
              infiniteLoop
            >
              <div className="img-wrapper">
                <img src="/img/index-cover/cover-1.jpeg" alt="log house" />
              </div>
              <div className="img-wrapper">
                <img src="/img/index-cover/cover-2.jpeg" alt="log house" />
              </div>
              <div className="img-wrapper">
                <img src="/img/index-cover/cover-3.jpeg" alt="log house" />
              </div>
              <div className="img-wrapper">
                <img src="/img/index-cover/cover-4.jpeg" alt="log house" />
              </div>
              <div className="img-wrapper">
                <img src="/img/index-cover/cover-5.jpeg" alt="log house" />
              </div>
            </Carousel>
          </div>
          <div className="text-container">
            <div className="text-wrapper">
              <h3 className="title">CONSTRUCT OR RESTORE</h3>
              <span className="description">
                We Provide Superior Value, Service, And Effort For Your Log Home
              </span>
              <Link href="/services">
                <a className="button">
                  <div className="text">Services</div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="brief-about">
          <div className="block">
            <div className="column-main">
              <div className="content-block">
                <div className="block-title">
                  <span>Who We Are</span>
                  <h2>A Better Restoration Company</h2>
                </div>
                <div className="block-description">
                  <p>
                    Our success is determined not only by the results we
                    acquire, but also by the manner in which we achieve them. In
                    all we do, we pledge to be accountable, honest, trustworthy,
                    ethical, and compliant..
                  </p>
                  <p>
                    Respect, trust, open communication, and a variety of ideas
                    and people are values we value and cultivate.{" "}
                  </p>
                </div>
                <div className="block-contact">
                  Let&apos;s Get In Touch:{" "}
                  <Link href="mailto:contact@texasloghomecr.com">
                    <a>Contact@TexasLogHomeCR.com</a>
                  </Link>
                </div>
                <div className="block-button">
                  <Link href="/about">
                    <a className="button">
                      <span className="text">Learn More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="column-sub">
              <div className="content-block">
                <div className="content-img">
                  <Carousel swipeable showStatus={false} autoPlay infiniteLoop>
                    <div className="img-wrapper">
                      <img
                        src="/img/index-cover/index-1.jpeg"
                        alt="log house being primed"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/img/index-cover/index-2.jpeg"
                        alt="log house being primed"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/img/index-cover/index-3.jpeg"
                        alt="log house being primed"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        src="/img/index-cover/index-4.jpeg"
                        alt="log house being primed"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="brief-services">
          <div className="container">
            <div className="block-content">
              <span className="subtitle">
                <p>Services</p>
              </span>
              <h2 className="title">
                Redefining Log Construction & Restoration
              </h2>
              <div className="description">
                The foundation for giving great service is formed by providing
                the best possible outcome, <br />
                whether that be in planning, design, building or restoration.
              </div>
            </div>
            <div className="block-services">
              <div className="container-service">
                <div className="wrapper-service">
                  <div className="cover-service">
                    <FontAwesomeIcon icon={["fas", "house"]} className="icon" />
                    <h3 className="title">
                      <Link href="/services">
                        <a>Home Construction</a>
                      </Link>
                    </h3>
                    <p className="description">
                      We specialize in log home construction, for local and
                      remote areas in the south and southwest region.
                    </p>
                    <Link href="/services">
                      <a className="button-wrapper">
                        <div className="button">
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="arrow"
                          />
                          More Details
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="container-service">
                <div className="wrapper-service">
                  {" "}
                  <div className="cover-service">
                    <FontAwesomeIcon
                      icon={["fas", "hammer"]}
                      className="icon"
                    />
                    <h3 className="title">
                      <Link href="/services">
                        <a>Home Restoration</a>
                      </Link>
                    </h3>
                    <p className="description">
                      In addition to home construction, we specialize in
                      restoring log homes through various methods including log
                      replacement and restoration.
                    </p>
                    <Link href="/services">
                      <a className="button-wrapper">
                        <div className="button">
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="arrow"
                          />
                          More Details
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="container-service">
                <div className="wrapper-service">
                  {" "}
                  <div className="cover-service">
                    <FontAwesomeIcon icon={["fas", "tree"]} className="icon" />
                    <h3 className="title">
                      <Link href="/services">
                        <a>Log Restoration</a>
                      </Link>
                    </h3>
                    <p className="description">
                      Whether it be for a home or other project, our team has
                      years of experience working with different logs to restore
                      or replace if needed.
                    </p>
                    <Link href="/services">
                      <a className="button-wrapper">
                        <div className="button">
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="arrow"
                          />
                          More Details
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="container-service">
                <div className="wrapper-service">
                  {" "}
                  <div className="cover-service">
                    <FontAwesomeIcon
                      icon={["fas", "pen-ruler"]}
                      className="icon"
                    />
                    <h3 className="title">
                      <Link href="/services">
                        <a>Home Modeling</a>
                      </Link>
                    </h3>
                    <p className="description">
                      If you&apos;re into building or buying a new home, our
                      team can provide you a detailed log home model to get a
                      sense as to what you may be looking for.
                    </p>
                    <Link href="/services">
                      <a className="button-wrapper">
                        <div className="button">
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="arrow"
                          />
                          More Details
                        </div>
                      </a>
                    </Link>
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

export default Index;
