
import Link from "next/link"

export default function Footer () {

return <>
      <footer className="footer">
        <div className="footer__typography">
          <h2>Phonto Code Innovations</h2>
          <p>Empowering your ideas with modern code.</p>
        </div>

        <div className="footer__links">

 

    <li className="footer__links__list">
      <Link href="/projects" className="footer__links__list__link" >
        <div className="icon-mask icon-mask__projects"></div>
        <span>Projects</span>
      </Link>
    </li>
    <li className="footer__links__list">
      <Link href="/contacts" className="footer__links__list__link" >
        <div className="icon-mask icon-mask__contact"></div>
        <span>Contact Us</span>
      </Link>
    </li>
    <li className="footer__links__list">
      <Link href="/overview" className="footer__links__list__link" >
        <div className="icon-mask icon-mask__about"></div>
        <span>About</span>
      </Link>
    </li>
        </div>

        <div className="footer__socials">

        <li className="footer__socials__list">
           <Link href="https://github.com/dmuse-project" target="_blank"  className="footer__socials__list__link">

        <div className="icon-mask icon-mask__github"></div>
        <span>GitHub</span>
      </Link>
    </li>
        <li className="footer__socials__list">
           <Link href="https://www.linkedin.com/in/muse-tech?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"  className="footer__socials__list__link">

        <div className="icon-mask icon-mask__linkedin"></div>
        <span>LinkedIn</span>
      </Link>
    </li>
        <li className="footer__socials__list">
           <Link href="https://twitter.com/TECH_PR0" target="_blank"  className="footer__socials__list__link">

        <div className="icon-mask icon-mask__twitter"></div>
        <span>Twitter</span>
      </Link>
    </li>
        <li className="footer__socials__list">
           <Link href="https://www.instagram.com/photoncode/" target="_blank"  className="footer__socials__list__link">

        <div className="icon-mask icon-mask__instagram"></div>
        <span>Instagram</span>
      </Link>
    </li>
        <li className="footer__socials__list">
           <Link href="https://www.facebook.com/share/16gx8YChaq/" target="_blank"  className="footer__socials__list__link">

        <div className="icon-mask icon-mask__facebook"></div>
        <span>facebook</span>
      </Link>
    </li>

      
        
          
        </div>

        <div className="footer__copy">
               &copy; {new Date().getFullYear()} Phonto Code Innovation. All rights reserved.
                        
        </div>
      </footer>

</>
}