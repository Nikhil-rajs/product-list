import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid p-2 ">
          <Link className="navbar-brand px-2" href="/">
            <Image
              src={"/Img/logo.png"}
              alt="logo"
              width={100}
              height={70}
            ></Image>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link fs-5">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/products" className="nav-link fs-5">
                  Products
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fs-5"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item fs-5"
                      href={`/category/smartphones`}
                    >
                      Smartphones
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item fs-5"
                      href={"/category/laptops"}
                    >
                      Laptops
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item fs-5"
                      href={"/category/groceries"}
                    >
                      Groceries
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item fs-5"
                      href={"/category/fragrances"}
                    >
                      Fragrances
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item fs-5"
                      href={"/category/skincare"}
                    >
                      Skincare
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
