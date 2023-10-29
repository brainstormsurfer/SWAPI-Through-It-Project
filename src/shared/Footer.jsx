import { socialLinks } from "../components/socials"
import SocialLink from "../components/SocialLink"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="main-footer">
    <div className="footer-content container">
    <p>This unofficial, non-commercial fan-made website is a labor of love and admiration. All content, including intellectual property and assets, belongs to TM & © Lucasfilm Ltd. {year}. All Rights Reserved.</p>    
    <div className="social">      
      {socialLinks.map(({id, awesomeClass, icon, link }) => {
      return (  
        <SocialLink key={id} icon={icon} awesomeClass={awesomeClass} link={link}/>)})}      
    </div>
  </div>
</footer>
  )
}

export default Footer