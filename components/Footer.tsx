import Link from "next/link";

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
            <li>Embed Insta Post Here</li>
            <li>Embed Insta Post Here</li>
            <li>Embed Insta Post Here</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="title">Gallery</h3>
          <ul className="items">
            <li>Image goes here.</li>
            <li>Image goes here.</li>
            <li>Image goes here.</li>
            <li>Image goes here.</li>
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
