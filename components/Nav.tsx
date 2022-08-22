import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -250 },
  };

  useEffect(() => {
    if (window.innerWidth > 1400) {
      setShow(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [setShow]);

  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>
            <img
              src="/img/logo.png"
              alt="Texas Log Home Construction and Restoration LLC."
            />
            <h1>
              TEXAS LOG HOME CONSTRUCTION
              <br /> AND RESTORATION LLC
            </h1>
          </a>
        </Link>
      </div>
      <motion.nav
        className={show ? "active" : ""}
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <ul>
          <li>
            <Link href="/about">
              <a
                onClick={() => setShow(window.innerWidth > 1400 ? true : !show)}
              >
                ABOUT
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a
                onClick={() => setShow(window.innerWidth > 1400 ? true : !show)}
              >
                GALLERY
              </a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a
                onClick={() => setShow(window.innerWidth > 1400 ? true : !show)}
              >
                SERVICES
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                onClick={() => setShow(window.innerWidth > 1400 ? true : !show)}
              >
                CONTACT
              </a>
            </Link>
          </li>
        </ul>
      </motion.nav>
      <motion.div
        className="hamburger-menu"
        onClick={() => setShow((show) => !show)}
        whileTap={{ scale: 0.9 }}
      >
        <span></span>
        <span></span>
      </motion.div>
    </header>
  );
};

export default Nav;
