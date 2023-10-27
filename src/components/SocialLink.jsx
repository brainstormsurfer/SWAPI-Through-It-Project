const SocialLink = ({icon, awesomeClass}) => {
  return (
    <i className={`fab ${awesomeClass}`}>{icon}</i>
  )
}

export default SocialLink