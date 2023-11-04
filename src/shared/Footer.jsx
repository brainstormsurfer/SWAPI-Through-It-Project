import { socialLinks } from "../components/socials"
import SocialLink from "../components/SocialLink"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
    <p>This unofficial, non-commercial fan-made website is a labor of love (and sweat). All content, trademarks, and intellectual property are exclusively owned by TM & © Lucasfilm Ltd. {year}. All rights reserved.</p>    
    <div className="footer-container social">      
      {socialLinks.map(({id, awesomeClass, icon, link }) => {
      return (  
        <SocialLink key={id} icon={icon} awesomeClass={awesomeClass} link={link}/>)})}      
  </div>
</footer>
  )
}

export default Footer