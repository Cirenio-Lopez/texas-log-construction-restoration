import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faHouse,
  faHammer,
  faTree,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  library.add(faAngleRight, faHouse, faHammer, faTree, faPenRuler);
  return (
    <div className="services section-wrapper">
      <section className="page-header">
        <div className="header-background service-background">
          <img alt="header-background" src="/img/index-cover/services-1.jpeg" />
        </div>
        <div className="text-container">
          <h2 className="title">Services</h2>
          <div className="subtitle">
            <p>
              <Link href="/">Home</Link>
            </p>
            <FontAwesomeIcon icon={["fas", "angle-right"]} className="arrow" />
            <p>Services</p>
          </div>
        </div>
      </section>
      <section className="page-columns">
        <div className="container">
          <div className="title-container">
            <span className="subtitle">Our Services</span>
            <h3 className="title">Redefining Log Work</h3>
            <span className="description">
              The foundation for giving great service is formed by providing the
              best possible outcome, <br />
              whether that be in planning, design, building or restoration.
            </span>
          </div>
          <div className="row">
            <div className="col-quart">
              <div className="content services">
                <FontAwesomeIcon
                  icon={["fas", "house"]}
                  className="block-icon"
                />
                <h3 className="block-title">
                  <Link href="/contact">
                    <a>Home Construction</a>
                  </Link>
                </h3>
                <p className="block-description">
                  We specialize in log home construction, for local and remote
                  areas in the south and southwest...
                </p>
                <Link href="/contact">
                  <a className="block-button-wrapper">
                    <div className="button">
                      <FontAwesomeIcon
                        icon={["fas", "angle-right"]}
                        className="arrow"
                      />
                      Contact
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-quart">
              <div className="content services">
                <FontAwesomeIcon
                  icon={["fas", "hammer"]}
                  className="block-icon"
                />
                <h3 className="block-title">
                  <Link href="/contact">
                    <a>Home Restoration</a>
                  </Link>
                </h3>
                <p className="block-description">
                  In addition to home construction, we specialize in restoring
                  log homes through various methods including log replacement
                  and restoration.
                </p>
                <Link href="/contact">
                  <a className="block-button-wrapper">
                    <div className="button">
                      <FontAwesomeIcon
                        icon={["fas", "angle-right"]}
                        className="arrow"
                      />
                      Contact
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-quart">
              <div className="content services">
                <FontAwesomeIcon
                  icon={["fas", "tree"]}
                  className="block-icon"
                />
                <h3 className="block-title">
                  <Link href="/contact">
                    <a>Log Restoration</a>
                  </Link>
                </h3>
                <p className="block-description">
                  Whether it be for a home or other project, our team has years
                  of experience working with different logs to restore or
                  replace if needed.
                </p>
                <Link href="/contact">
                  <a className="block-button-wrapper">
                    <div className="button">
                      <FontAwesomeIcon
                        icon={["fas", "angle-right"]}
                        className="arrow"
                      />
                      Contact
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-quart">
              <div className="content services">
                <FontAwesomeIcon
                  icon={["fas", "pen-ruler"]}
                  className="block-icon"
                />
                <h3 className="block-title">
                  <Link href="/contact">
                    <a>Home Modeling</a>
                  </Link>
                </h3>
                <p className="block-description">
                  If you&apos;re into building or buying a new home, our team
                  can provide you a detailed log home model to get a sense as to
                  what you may be looking for.
                </p>
                <Link href="/contact">
                  <a className="block-button-wrapper">
                    <div className="button">
                      <FontAwesomeIcon
                        icon={["fas", "angle-right"]}
                        className="arrow"
                      />
                      Contact
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
