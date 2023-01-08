import Link from "next/link";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { gql } from "@apollo/client";
import client from "../../apolloClient";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        galleries(where: { galleryTitle: "projectEight" }) {
          galleryImages {
            ... on Image {
              image(first: 100) {
                url
              }
            }
          }
        }
      }
    `,
  });

  let images = data.galleries[0].galleryImages.image.map((a) => a.url);

  return {
    props: { images },
  };
}

const ProjectEight = (images) => {
  library.add(faAngleRight, faPhone);
  return (
    <>
      <Head>
        <title>
          Project Eight - Texas Log Home Construction and Restoration
        </title>
      </Head>
      <div className="gallery section-wrapper">
        <section className="page-header">
          <div className="header-background service-background">
            <img alt="header-background" src={images.images[0]} />
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
              <p>Project Eight</p>
            </div>
          </div>
        </section>
        <section className="page-columns">
          <div className="container">
            <div className="row">
              <div className="col-half">
                <div className="content">
                  <Carousel
                    swipeable
                    autoPlay
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop
                  >
                    {images.images.map((image, index) => {
                      return (
                        <div className="img-wrapper" key={index}>
                          <img src={image} alt="Project Eight image" />
                        </div>
                      );
                    })}
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

export default ProjectEight;
