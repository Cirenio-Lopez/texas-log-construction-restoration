import Link from "next/link";
import { TRUE } from "sass";

const Footer = () => {
  return (
    <footer>
      <div className="columns-wrapper">
        <div className="column">
          <h3 className="title">Contact</h3>
          <ul className="items">
            <li>
              <Link href="tel:2149515087">+1 (214) 951-5087</Link>
              <br />
              <br />
              <Link href="mailto:contact@texasloghomecr.com">
                contact@texasloghomecr.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="title">Our Services</h3>
          <ul className="items">
            <li>
              <Link href="/services">Home Restoration</Link>
            </li>
            <li>
              <Link href="/services">Log Restoration</Link>
            </li>
            <li>
              <Link href="/services">Log Modeling/Design</Link>
            </li>
            <li>
              <Link href="/services">Home Construction</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="title">Latest Posts</h3>
          <ul className="items">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100089001444349&tabs=timeline&width=340&height=271&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=520275605923973"
              height="400"
              style={{ border: "none", overflow: "hidden", width: "100%" }}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </ul>
        </div>
        <div className="column column-gallery">
          <h3 className="title">Gallery</h3>
          <ul className="items gallery-images">
            <li>
              <Link href="/gallery/projectOne">
                <div>
                  <img
                    src="/gallery/projectOne/cover/projectOne (cover).jpg"
                    alt=""
                  />
                  <h3 className="subtitle">Project One</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/gallery/projectTwo">
                <div>
                  <img
                    src="/gallery/projectTwo/cover/projectTwo (cover).jpg"
                    alt=""
                  />
                  <h3 className="subtitle">Project Two</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/gallery/projectThree">
                <div>
                  <img
                    src="/gallery/projectSix/cover/projectSix (cover).jpg"
                    alt=""
                  />
                  <h3 className="subtitle">Project Three</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/gallery/projectFour">
                <div>
                  <img
                    src="/gallery/projectFour/cover/projectFour (cover).jpg"
                    alt=""
                  />
                  <h3 className="subtitle">Project Four</h3>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="credits">
        <span>
          Created by{" "}
          <Link href="https://www.cirenio.net/">
            <a>Cirenio</a>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
