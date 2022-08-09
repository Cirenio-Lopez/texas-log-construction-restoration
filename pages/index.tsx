import type { NextPage } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faHammer,
  faTree,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";

const Index: NextPage = () => {
  library.add(faHouse, faHammer, faTree, faPenRuler);
  return (
    <div className="index">
      <section className="cover">
        <div className="img-container">
          <div className="img-wrapper">
            <img src="/img/index-cover/cover-1.jpeg" alt="log house" />
          </div>
        </div>
        <div className="text-container">
          <div className="text-wrapper">
            <h3 className="title">CONSTRUCT OR RESTORE</h3>
            <span className="description">
              We Provide Superior Value, Service, And Effort For Your Log Home
            </span>
            <Link href="#">
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
                  Our success is determined not only by the results we acquire,
                  but also by the manner in which we achieve them. In all we do,
                  we pledge to be accountable, honest, trustworthy, ethical, and
                  compliant..
                </p>
                <p>
                  Respect, trust, open communication, and a variety of ideas and
                  people are values we value and cultivate.{" "}
                </p>
              </div>
              <div className="block-contact">
                Let&apos;s Get In Touch:{" "}
                <Link href="#">
                  <a>Example@Example.com</a>
                </Link>
              </div>
              <div className="block-button">
                <Link href="#">
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
                <div className="img-wrapper">
                  <img
                    src="/img/index-cover/index-1.jpeg"
                    alt="log house being primed"
                  />
                </div>
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
            <h2 className="title">Redefining Log Construction & Restoration</h2>
            <div className="description">
              The foundation for giving service to our consumers is formed by
              recycling, collection, organics, energy,
              <br /> landfills, professional services, and sustainability.
            </div>
          </div>
          <div className="block-services">
            <div className="container-service">
              <div className="wrapper-service">
                <div className="cover-service">
                  <FontAwesomeIcon icon={["fas", "house"]} className="icon" />
                  <h3 className="title">
                    <Link href="#">
                      <a>Home Construction</a>
                    </Link>
                  </h3>
                  <p className="description">
                    We specialize in log home construction, for local and remote
                    areas in the south and southwest...
                  </p>
                  <Link href="#">
                    <a className="button-wrapper">
                      <div className="button">
                        <span className="arrow"></span>
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
                  <FontAwesomeIcon icon={["fas", "hammer"]} className="icon" />
                  <h3 className="title">
                    <Link href="#">
                      <a>Home Restoration</a>
                    </Link>
                  </h3>
                  <p className="description">
                    In addition to home construction, we specialize in restoring
                    log homes through various methods including log replacement
                    and restoration.
                  </p>
                  <Link href="#">
                    <a className="button-wrapper">
                      <div className="button">
                        <span className="arrow"></span>
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
                    <Link href="#">
                      <a>Log Restoration</a>
                    </Link>
                  </h3>
                  <p className="description">
                    Whether it be for a home or other project, our team has
                    years of experience working with different logs to restore
                    or replace if needed.
                  </p>
                  <Link href="#">
                    <a className="button-wrapper">
                      <div className="button">
                        <span className="arrow"></span>
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
                    <Link href="#">
                      <a>Home Modeling</a>
                    </Link>
                  </h3>
                  <p className="description">
                    If you&apos;re into building or buying a new home, our team
                    can provide you a detailed log home model to get a sense as
                    to what you may be looking for.
                  </p>
                  <Link href="#">
                    <a className="button-wrapper">
                      <div className="button">
                        <span className="arrow"></span>
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
  );
};

export default Index;
