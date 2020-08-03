/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/chakraLogo.png"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-5"}>
                <div className={"widget__item"}>
                  <div className={"logo"}>
                    <Link to="/" title={"HiStaff"}>
                      <img alt={"Logo"} src={logo} />
                    </Link>
                  </div>

                  <div className={"about"}>
                    <p>
                      Mościwego Pana zastępuje i zwycięzca, wydartych potomkom
                      Cezarów rzucił w Pańskim pisano zakonie i Rzeczpospolita!
                      Zawżdy z których by wychowanie poznano stołeczne.
                    </p>
                  </div>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <ul className={"links"}>
                    <h4>Chakra</h4>
                    <ul>
                      <li>
                        <Link to="/mission/slack" title={"Mission"}>
                          Misja
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" title={"About Us"}>
                          O nas
                        </Link>
                      </li>
                      <li>
                        <a href={""}>Blog</a>
                      </li>
                      <li>
                        <a
                          className={"links__special"}
                          href={"https://strevitz-chat.netlify.app/"}
                          target={"_blank"}
                          title={"Będziemy wdzięczni za Twój feedback"}
                        >
                          Feedback
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <div className={"links"}>
                    <h4>Obsługa</h4>
                    <ul>
                      <li>
                        <Link to="/contact" title={"Contact Us"}>
                          Kontakt
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy" title={"Privacy Policy"}>
                          Polityka prywatności
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"widget__item"}>
                  <div className={"social"}>
                    <a
                      href="https://twitter.com"
                      target={"_blank"}
                      title={"Twitter"}
                    >
                      <img alt={"Twitter"} src={iconTwitter} />
                    </a>

                    <a
                      href="https://www.instagram.com"
                      target={"_blank"}
                      title={"Instagram"}
                    >
                      <img alt={"Instagram"} src={iconInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={"copyright"}>
              <p>
                Copyright {new Date().getFullYear()}, {` `}{" "}
                <a href="https://strzewiczek.pl" title={"Chakra"}>
                  Chakra
                </a>
                . Wszystkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
