import './styles/SocialLink.css'

const SocialLink = ({icon, link}) => {
  return (    
    <a href={link}>
    <i className="fa-icon">
     {icon}
    </i>
    </a>      
  )
}

export default SocialLink