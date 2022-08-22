import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="columns-wrapper">
        <div className="column">
          <h3 className="title">Contact</h3>
          <ul className="items">
            <li>
              123 Example St.
              <br />
              Dallas, TX 75217
            </li>
            <li>
              +800-555-5555
              <br />
              info@example.com
            </li>
            <li>
              Mon-Sat: 9.00am to 7.00pm
              <br />
              Sunday Closed
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="title">Our Services</h3>
          <ul className="items">
            <li>
              <Link href="/contact">Home Restoration</Link>
            </li>
            <li>
              <Link href="/contact">Log Restoration</Link>
            </li>
            <li>
              <Link href="/contact">Log Modeling/Design</Link>
            </li>
            <li>
              <Link href="/contact">Home Construction</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="title">Latest Posts</h3>
          <ul className="items">
            <li>Latest Home Built in Colorado</li>
            <li>Latest Home Built in Fort-Worth</li>
            <li>Latest Home Built in Texas</li>
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
