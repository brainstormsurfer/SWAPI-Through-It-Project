
import Slider from './Slider'

const SlideContainer = ({ quizScenes, score }) => {
    
      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };
    
  return (
    <div>
    <h1 style={{ color: "red" }}>Your Score: {score}</h1>
    <div style={containerStyles}>      
      <Slider quizScenes={quizScenes} />        
    </div>
  </div>
  )
}

export default SlideContainer