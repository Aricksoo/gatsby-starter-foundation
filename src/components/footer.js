/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        A personal blog for my projects and interests, Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by Arick Soo
      </p>
    </div>
  </footer>
)

export default Footer
