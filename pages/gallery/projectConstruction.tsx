import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faPhone } from "@fortawesome/free-solid-svg-icons";

const ProjectConstruction = () => {
  library.add(faAngleRight, faPhone);
  return (
    <div className="gallery section-wrapper">
      <section className="page-header">
        <div className="header-background service-background">
          <img
            alt="header-background"
            src="/gallery/projectConstruction/projectConstruction (11).jpg"
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
            <p>Construction</p>
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
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (1).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (2).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (3).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (4).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (5).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (6).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (7).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (8).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (9).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (10).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (11).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (12).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (13).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (14).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (15).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (16).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (17).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (18).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (19).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (20).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (21).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (22).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (23).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (24).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (25).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (26).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (27).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (28).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (29).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (30).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (31).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (32).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (33).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (34).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (35).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (36).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (37).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (38).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (39).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (40).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (41).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (42).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (43).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (44).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (45).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (46).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (47).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (48).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (49).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (50).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (51).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (52).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (53).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (54).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (55).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (56).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (57).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (58).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (59).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (60).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (61).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (62).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (63).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (64).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (65).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (66).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (67).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (68).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (69).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (70).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (71).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (72).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (73).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (74).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (75).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (76).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (77).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (78).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (79).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (80).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (81).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (82).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (83).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (84).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (85).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (86).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (87).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (88).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (89).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (90).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (91).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (92).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (93).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (94).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (95).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (96).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (97).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (98).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (99).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (100).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (101).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (102).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (103).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (104).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (105).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (106).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (107).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (108).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (109).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (110).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (111).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (112).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (113).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (114).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (115).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (116).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (117).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (118).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (119).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (120).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (121).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (122).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (123).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (124).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (125).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (126).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (127).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (128).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (129).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (130).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (131).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (132).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (133).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (134).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (135).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (136).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (137).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (138).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (139).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (140).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (141).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (142).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (143).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (144).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (145).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (146).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (147).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (148).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (149).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (150).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (151).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (152).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (153).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (154).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (155).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (156).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (157).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (158).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (159).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (160).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (161).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (162).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (163).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (164).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (165).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (166).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (167).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (168).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (169).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (170).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (171).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (172).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (173).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (174).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (175).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (176).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (177).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (178).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (179).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (180).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (181).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (182).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (183).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (184).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (185).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (186).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (187).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (188).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (189).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (190).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (191).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (192).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (193).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (194).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (195).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (196).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (197).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (198).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (199).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (200).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (201).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (202).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (203).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (204).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (205).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (206).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (207).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (208).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (209).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (210).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (211).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (212).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (213).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (214).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (215).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (216).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (217).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (218).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (219).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (220).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (221).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (222).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (223).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (224).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (225).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (226).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (227).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (228).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (229).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (230).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (231).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (232).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (233).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (234).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (235).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (236).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (237).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (238).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (239).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (240).jpg"
                      alt="Project Construction image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectConstruction/projectConstruction (241).jpg"
                      alt="Project Construction image"
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

export default ProjectConstruction;
