import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faPhone } from "@fortawesome/free-solid-svg-icons";

const ProjectEight = () => {
  library.add(faAngleRight, faPhone);
  return (
    <div className="gallery section-wrapper">
      <section className="page-header">
        <div className="header-background service-background">
          <img
            alt="header-background"
            src="/gallery/projectEight/projectEight (1).jpg"
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
            <p>Project Eight</p>
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
                      src="/gallery/projectEight/projectEight (1).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (2).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (3).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (4).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (5).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (6).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (7).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (8).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (9).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (10).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (11).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (12).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (13).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (14).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (15).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (16).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (17).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (18).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (19).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (20).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (21).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (22).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (23).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (24).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (25).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (26).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (27).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (28).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (29).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (30).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (31).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (32).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (33).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (34).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (35).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (36).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (37).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (38).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (39).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (40).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (41).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (42).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (43).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (44).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (45).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (46).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (47).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (48).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (49).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (50).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (51).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (52).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (53).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (54).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (55).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (56).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (57).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (58).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (59).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (60).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (61).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (62).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (63).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (64).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (65).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (66).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (67).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (68).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (69).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (70).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (71).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (72).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (73).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (74).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (75).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (76).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (77).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (78).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (79).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (80).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (81).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (82).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (83).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (84).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (85).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (86).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (87).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (88).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (89).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (90).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (91).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (92).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (93).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (94).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (95).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (96).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (97).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (98).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (99).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (100).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (101).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (102).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (103).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (104).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (105).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (106).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (107).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (108).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (109).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (110).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (111).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (112).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (113).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (114).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (115).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (116).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (117).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (118).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (119).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (120).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (121).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (122).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (123).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (124).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (125).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (126).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (127).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (128).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (129).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (130).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (131).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (132).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (133).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (134).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (135).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (136).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (137).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (138).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (139).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (140).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (141).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (142).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (143).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (144).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (145).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (146).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (147).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (148).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (149).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (150).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (151).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (152).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (153).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (154).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (155).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (156).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (157).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (158).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (159).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (160).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (161).jpg"
                      alt="Project Eight image"
                    />
                  </div>
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src="/gallery/projectEight/projectEight (162).jpg"
                      alt="Project Eight image"
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

export default ProjectEight;
