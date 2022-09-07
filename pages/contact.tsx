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
        <title>Contact - Texas Log Home Construction and Restoration</title>
      </Head>
      <div className="about section-wrapper">
        <section className="page-header">
          <div className="header-background">
            <img alt="header-background" src="/img/index-cover/cover-1.jpeg" />
          </div>
          <div className="text-container">
            <h2 className="title">Contact</h2>
            <div className="subtitle">
              <p>
                <Link href="/">Home</Link>
              </p>
              <FontAwesomeIcon
                icon={["fas", "angle-right"]}
                className="arrow"
              />
              <p>Contact</p>
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
                        Contact us to learn more about our business and our
                        services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-half">
                <div className="content">
                  <div className="block-title">
                    <p className="subtitle">Quick Contact</p>
                    <h3 className="title">Interested? Contact Us</h3>
                  </div>
                  <div className="block-description">
                    <p className="description">
                      Texas Log Home Construction and Restoration LLC has
                      constantly been working to create results our clients
                      love. If you are interested in any of our services, send
                      us an email or call us and we can set you up with a quote.
                      <br />
                      <br />
                    </p>
                    {/* <h4 className="title">Address</h4>
                    <p className="description">
                      123 Example St.
                      <br />
                      Dallas, TX 75217
                      <br />
                      <br />
                    </p> */}
                    <h4 className="title">Phone</h4>
                    <p className="description">
                      <Link href="tel:2149515087">+1 (214) 951-5087</Link>{" "}
                      <br />
                      <br />
                    </p>
                    <h4 className="title">Email</h4>
                    <p className="description">
                      <Link href="mailto:contact@texasloghomecr.com">
                        contact@texasloghomecr.com
                      </Link>
                      <br />
                      <br />
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
