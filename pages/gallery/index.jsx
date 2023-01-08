import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { gql } from "@apollo/client";
import client from "../../apolloClient";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        galleries {
          coverImage {
            url
          }
        }
      }
    `,
  });
  const coverImages = {
    0: data.galleries[0].coverImage.url,
    1: data.galleries[1].coverImage.url,
    2: data.galleries[2].coverImage.url,
    3: data.galleries[3].coverImage.url,
    4: data.galleries[4].coverImage.url,
    5: data.galleries[5].coverImage.url,
    6: data.galleries[6].coverImage.url,
    7: data.galleries[7].coverImage.url,
    8: data.galleries[8].coverImage.url,
  };

  return {
    props: { coverImages },
  };
}

const Index = (coverImages) => {
  library.add(faAngleRight);
  return (
    <>
      <Head>
        <title>Gallery - Texas Log Home Construction and Restoration</title>
      </Head>
      <div className="gallery section-wrapper">
        <section className="page-header">
          <div className="header-background service-background">
            <img alt="header-background" src="/img/index-cover/cover-3.jpeg" />
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
              <p>Gallery</p>
            </div>
          </div>
        </section>
        <section className="page-columns">
          <div className="container">
            <div className="title-container">
              <span className="subtitle">Gallery</span>
              <h3 className="title">A Glimpse of Our Past Projects</h3>
              <span className="description">
                Throughout the past several years, we have been fortunate enough
                to have worked with several different clients located throughout
                the United States. We&apos;ve conducted project that have
                involved log home modeling, construction, and restoration. Here,
                you will find an assortment of our previous projects.
              </span>
            </div>
            <div className="row">
              <div className="col-quart">
                <div
                  className="content gallery"
                  onClick={() => window.open("/gallery/projectOne", "_self")}
                >
                  <div className="block-title">
                    <h4>Log Restoration</h4>
                  </div>
                  <div className="block-image">
                    <img src={coverImages.coverImages[0]} alt="test" />
                  </div>
                  <div className="block-subtitle">
                    <h4>Texas</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      This project was primarily focused on log home
                      restoration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-quart">
                <div
                  className="content gallery"
                  onClick={() => window.open("/gallery/projectTwo", "_self")}
                >
                  <div className="block-title">
                    <h4>Log Restoration</h4>
                  </div>
                  <div className="block-image">
                    <img src={coverImages.coverImages[1]} alt="test" />
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
                <div
                  className="content gallery"
                  onClick={() => window.open("/gallery/projectThree", "_self")}
                >
                  <div className="block-title">
                    <h4>Home Construction</h4>
                  </div>
                  <div className="block-image">
                    <img src={coverImages.coverImages[2]} alt="test" />
                  </div>
                  <div className="block-subtitle">
                    <h4>Texas</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      This project was primarily focused on log home restoration
                      for a client located in a remote part of Texas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-quart">
                <div
                  className="content gallery"
                  onClick={() => window.open("/gallery/projectFour", "_self")}
                >
                  <div className="block-title">
                    <h4>Log Restoration</h4>
                  </div>
                  <div className="block-image">
                    <img src={coverImages.coverImages[3]} alt="test" />
                  </div>
                  <div className="block-subtitle">
                    <h4>Colorado</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      This project was primarily composed of demolition and
                      reconstruction of a log home located in Colorado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-quart">
                <div
                  className="content gallery"
                  onClick={() => window.open("/gallery/projectFive", "_self")}
                >
                  <div className="block-title">
                    <h4>Home Modeling</h4>
                  </div>
                  <div className="block-image">
                    <img src={coverImages.coverImages[4]} alt="test" />
                  </div>
                  <div className="block-subtitle">
                    <h4>Texas</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      This project was primarily focused on log home
                      restoration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-quart">
                <div
                  className="content gallery"
                  onClick={() => window.open("/gallery/projectSix", "_self")}
                >
                  <div className="block-title">
                    <h4>Log Restoration</h4>
                  </div>
                  <div className="block-image">
                    <img src={coverImages.coverImages[5]} alt="test" />
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
                <div
                  className="content gallery"
                  onClick={() => window.open("/gallery/projectSeven", "_self")}
                >
                  <div className="block-title">
                    <h4>Log Restoration</h4>
                  </div>
                  <div className="block-image">
                    <img src={coverImages.coverImages[6]} alt="test" />
                  </div>
                  <div className="block-subtitle">
                    <h4>Colorado</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      This project was primarily composed of demolition and
                      reconstruction of a log home located in Colorado.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-quart">
                <div
                  className="content gallery"
                  onClick={() => window.open("/gallery/projectEight", "_self")}
                >
                  <div className="block-title">
                    <h4>Log Restoration</h4>
                  </div>
                  <div className="block-image">
                    <img src={coverImages.coverImages[7]} alt="test" />
                  </div>
                  <div className="block-subtitle">
                    <h4>Texas</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      This project was primarily focused on log home restoration
                      for a client located in a remote part of Texas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-quart">
                <div
                  className="content gallery"
                  onClick={() =>
                    window.open("/gallery/projectConstruction", "_self")
                  }
                >
                  <div className="block-title">
                    <h4>Home Modeling</h4>
                  </div>
                  <div className="block-image">
                    <img src={coverImages.coverImages[8]} alt="test" />
                  </div>
                  <div className="block-subtitle">
                    <h4>Texas</h4>
                  </div>
                  <div className="block-description">
                    <p>
                      This project was primarily focused on log home
                      restoration.
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

export default Index;
