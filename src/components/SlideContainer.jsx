import Carousel from "./Carousel";
// import Slider from "./Slider";
//  .slideContainer , .sliderStyles , .slideStyles
const SlideContainer = ({ scenes }) => {
  // const containerStyles = {
  //   width: "100%",
  //   height: "30%",
  //   margin: "0 auto",
  // };

  return (

      //  <div style={containerStyles}>
      //  <div className="slideContainer">
      // <Slider scenes={scenes} />
      // <div className="carousel-container">
      <Carousel scenes={scenes} />
    //  </div>
  );
};

export default SlideContainer;

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
