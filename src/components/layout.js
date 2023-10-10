import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

import GoogleAdvertise from "../components/GoogleAdvertise"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
        <div className="site-ads-leaderboard">   
          <GoogleAdvertise
            client="ca-pub-3629499401438446"
            slot="1930227054"
            format="auto"
            responsive="true"
          />            
        </div>        
      </header>

      <main>{children}</main>

      <footer>

      </footer>
    </div>
  )
}

export default Layout
