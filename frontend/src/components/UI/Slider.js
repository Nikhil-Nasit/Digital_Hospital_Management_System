// import React, { useState } from "react";
// import DataSlider from "./DataSlider";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import "./Slider.css";

// const Slider = (props) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const length = DataSlider.length;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
//   };

//   return (
//     <section className="slider">
//       <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
//       <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

//       <div className="container-slider">
//         {DataSlider.map((obj, index) => {
//           return (
//             <div
//               key={index}
//               className={index === currentSlide ? "slide active" : "slide"}
//             >
//               {currentSlide === index && <img src={obj.image} alt="" className="image"></img>}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Slider;
