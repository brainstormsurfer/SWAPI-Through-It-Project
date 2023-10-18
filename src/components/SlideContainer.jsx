
import Slider from './Slider'

const SlideContainer = ({ scenes, score }) => {
      // const containerStyles = {
      //   width: "1500px",
      //   height: "280px",
      //   margin: "0 auto",
      // };
    
  return (
    <div className='scene-container'>
    <div className="slideContainer">      
    {/* <div className="sliderStyles">       */}
    {/* <div style={{containerStyles}}>       */}
    <Slider scenes={scenes} />        
    </div>
    </div>
  )
}

export default SlideContainer

// const SlideContainer = ({ scenes, score }) => {
    
//       const containerStyles = {
//         width: "1500px",
//         height: "280px",
//         margin: "0 auto",
//       };
    
//   return (
//     <div className="modal-container">      
//     {/* // <div style={{containerStyles}}>       */}
//       <Slider scenes={scenes} />        
//     </div>
//   )
// }

// export default SlideContainer