const SocialLink = ({icon, awesomeClass, link}) => {
  return (    
    <a href={link}>
    <i className="fa-icon">
     {icon}
    </i>
    </a>      
  )
}

export default SocialLink