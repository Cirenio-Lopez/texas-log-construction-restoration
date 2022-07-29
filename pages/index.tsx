import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="index">
      <section className="cover">
        <div className="img-container">
          <div className="img-wrapper">
            <img src="/img/index-cover/cover-1.jpeg" />
          </div>
        </div>
        <div className="text-container">
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
      </section>
      <section className="brief-about"></section>
    </div>
  );
};

export default Home;
